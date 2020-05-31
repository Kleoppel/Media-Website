// TODO: Add Auth logic to display/hide profile/login links when Auth is finished.

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Auth} from 'aws-amplify';
import Home from "./containers/Home";
import Search from "./components/Search";

import Navigation from './components/Navigation';
import ChangePassword from "./components/auth/ChangePassword";
import ChangePasswordConfirm from "./components/auth/ChangePasswordConfirm";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordVerification from "./components/auth/ForgotPasswordVerification";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import Welcome from "./components/auth/Welcome";
import NotFound from "./containers/NotFound";
import './App.css';


import Footer from "./components/Footer";



const testData = [
  {
    id: 1, name: "Red Angus", date: "12-31-2020",
    image: "mcdonald_front_cover.PNG"
  },
  {
    id: 2, name: "McDonalds", date: "10-31-2020",
    image: "mcdonald_front_cover.PNG"
  }
];

class App extends React.Component {
  state = {
    catalogs: testData,
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  };

  setAuthStatus = authenticated => {
    this.setState({isAuthenticated: authenticated})
  };

  setUser = user => {
    this.setState({user: user});
  };

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
    this.setState({isAuthenticating: false})
  };

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    };

    return (
      !this.state.isAuthenticating &&
      <div>

        <Router>
          <div>
          <Navigation/>
            <Switch>

              <Route path="/" exact component={Home}/>
              <Route path="/search" exact component={Search}/>
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps}/>}/>
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps}/>}/>
              <Route exact path="/forgotpassword"
                     render={(props) => <ForgotPassword {...props} auth={authProps}/>}/>
              <Route exact path="/forgotpasswordverification"
                     render={(props) => <ForgotPasswordVerification {...props} auth={authProps}/>}/>
              <Route exact path="/changepassword"
                     render={(props) => <ChangePassword {...props} auth={authProps}/>}/>
              <Route exact path="/changepasswordconfirmation"
                     render={(props) => <ChangePasswordConfirm {...props} auth={authProps}/>}/>
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps}/>}/>
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
