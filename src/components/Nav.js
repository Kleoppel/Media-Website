//TODO: Pull out login/auth logic and add to Navigation when Amplify is finished.

import React, {Component} from 'react';
import {Auth} from 'aws-amplify';
import '../App.css';

class Nav extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="hexal-logo.png" width="112" height="28" alt="hexal logo"/>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}
              <div>
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <button className="buttons">
                      <a href="/register" >
                        <strong>Register</strong>
                      </a>
                    </button>
                    <button className="buttons">
                      <a href="/login" >
                        Log in
                      </a>
                    </button>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="buttons">
                    Log out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
