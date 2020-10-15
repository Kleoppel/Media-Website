import React from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home";
import Upload from "./containers/Upload";
import Navigation from './components/Navigation';
import NotFound from "./containers/NotFound";
import './App.scss';
import Footer from "./components/Footer";
import Search from './components/Search';
import Admin from "./containers/Admin";

Amplify.configure(aws_exports);

class App extends React.Component {

  render() {

    return (
      <div className="site-container">
        <Router>
          <div className="site-content">
            <Navigation />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />}/>
              <Route path="/upload" render={(props) => <Upload {...props} />}/>
              <Route path="/admin" render={(props) => <Admin {...props} />}/>
              <Route path="/search" render={(props) => <Search {...props} />}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>

    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: true,
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
})
