import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import {API} from 'aws-amplify';
// import './Home.css';

export default class Home extends Component {
  state = {
    isLoading: true,
    testApiCall: []
  };

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const testApiCall = await this.testApiCall();
      this.setState({testApiCall});
    } catch (e) {
      alert(e);
    }

    this.setState({isLoading: false});
  }

  mediaWebsite() {
    return API.get('media-website', '/hello', 'GET');
  }

  renderTestAPI(mediaWebsite) {
    console.log(mediaWebsite);
    return mediaWebsite.message;
  }

  renderLander() {
    return (
      <div className="lander">
        <h3 className="text-center"> Latest Videos on Miniflix </h3>
        <hr/>
        <div className="col-sm-12">
        </div>
      </div>
    );
  }

  renderTest() {
    return (
      <div className="test">
        <h1>Test API call</h1>
        <ListGroup>{!this.state.isLoading && this.renderTestAPI(this.state.mediaWebsite)}</ListGroup>
      </div>
    );
  }

  render() {
    return <div className="Home">{this.props.isAuthenticated ? this.renderTest() : this.renderLander()}</div>;
  }
}
