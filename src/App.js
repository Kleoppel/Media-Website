// TODO: Add Auth logic to display/hide profile/login links when Auth is finished.

import React, { useState, useEffect, useReducer } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home";
import Navigation from './components/Navigation';
// import Upload from './components/Upload';
import NotFound from "./containers/NotFound";
import './App.scss';
import Footer from "./components/Footer";
// import { API, graphqlOperation } from "aws-amplify";
// import {listMedias as ListMedias} from "./graphql/queries";

// function App() {
//   const [media, updateMedia] = useState([]);
//   const [categories, setCategories] = useState([]);
//   };
//   useEffect(() => {
//     getData()
//   }, []);
//
//   async function getData() {
//     try {
//       const mediaData = await API.graphql(graphqlOperation(ListMedias));
//       console.log('mediaData: ', mediaData);
//       updateMedia(mediaData.data.listMedias.items)
//     } catch (err) {
//       console.log('error fetching media...', err)
//     }
//   }
//
//   // state = {
//   //   name: '',
//   //   description: '',
//   //   media: []
//   // };
//   //
//   // async componentDidMount() {
//   //   try {
//   //     const mediaData = await API.graphql(graphqlOperation(ListMedias));
//   //     console.log('mediaData: ', mediaData);
//   //     this.setState({
//   //       media: mediaData.data.listMedias.items
//   //     })
//   //   } catch (err) {
//   //     console.log('error fetching media...', err)
//   //   }
//   // }
//
//   // render() {
//     return (
//       <div className="site-container">
//         <Router>
//           <div className="site-content">
//             <Navigation />
//             <Switch>
//               <Route exact path="/" render={(props) => <Home {...props}
//                                                              media={media}
//                                                              categories={categories}
//                                                              setCategories={setCategories}/> } />
//               <Route exact path="/upload" render={(props) => <Upload {...props}
//                                                                      media={media}
//                                                                      categories={categories}
//                                                                      setCategories={setCategories}/>} />
//               <Route component={NotFound}/>
//             </Switch>
//           </div>
//         </Router>
//         <Footer/>
//       </div>
//     );
//   // }
// }
class App extends React.Component {
  // state = {
  //   // catalogs: testData,
  //   isAuthenticated: false,
  //   isAuthenticating: true,
  //   user: null
  // };
  //
  // setAuthStatus = authenticated => {
  //   this.setState({isAuthenticated: authenticated})
  // };
  //
  // setUser = user => {
  //   this.setState({user: user});
  // };

  // async componentDidMount() {
  //   try {
      // const session = await Auth.currentSession();
      // this.setAuthStatus(true);
      // console.log(session);
      // const user = await Auth.currentAuthenticatedUser();
      // this.setUser(user);
    // } catch (error) {
    //   console.log(error);
    // }
    // this.setState({isAuthenticating: false})
  // };

  render() {
    // const authProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   user: this.state.user,
    //   setAuthStatus: this.setAuthStatus,
    //   setUser: this.setUser
    // };

    return (
      <div className="site-container">
        <Router>
          <div className="site-content">
            <Navigation />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>

    );
  }
}

export default App;
