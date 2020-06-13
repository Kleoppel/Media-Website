// TODO: Add Auth logic to display/hide profile/login links when Auth is finished.

import React, { useState, useEffect, useReducer } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home";
import Navigation from './components/Navigation';
import Upload from './components/Upload';
import NotFound from "./containers/NotFound";
import './App.css';
import Footer from "./components/Footer";
import { API, graphqlOperation } from "aws-amplify";
import {listMedias as ListMedias} from "./graphql/queries";

function App() {
  const [media, updateMedia] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    try {
      const mediaData = await API.graphql(graphqlOperation(ListMedias));
      console.log('mediaData: ', mediaData);
      updateMedia(mediaData.data.listMedias.items)
    } catch (err) {
      console.log('error fetching media...', err)
    }
  }

  // state = {
  //   name: '',
  //   description: '',
  //   media: []
  // };
  //
  // async componentDidMount() {
  //   try {
  //     const mediaData = await API.graphql(graphqlOperation(ListMedias));
  //     console.log('mediaData: ', mediaData);
  //     this.setState({
  //       media: mediaData.data.listMedias.items
  //     })
  //   } catch (err) {
  //     console.log('error fetching media...', err)
  //   }
  // }

  // render() {
    return (
      <div>
        <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props}
                                                             media={media}
                                                             categories={categories}
                                                             setCategories={setCategories}/> } />
              <Route exact path="/upload" render={(props) => <Upload {...props}
                                                                     media={media}
                                                                     categories={categories}
                                                                     setCategories={setCategories}/>} />
              <Route component={NotFound}/>
            </Switch>
        </Router>
        <Footer/>
      </div>
    );
  // }
}

export default App;
