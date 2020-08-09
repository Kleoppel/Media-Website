import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter, Link, Redirect } from 'react-router-dom';

import { Form, FormControl, Button } from 'react-bootstrap';

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '',
      redirect: null};//"/search"};
      
    // this.history = useHistory();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  

  handleChange(event) {
   
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    debugger;
    event.preventDefault();
    //do search?  if results create menu overlay
    if(this.state.value != null){
      this.setState({redirect: "/search"});
     
  
    }
  }

  render() {
    console.log(this.props);
   
    if(this.state.redirect !== null) {
      return <Redirect to={this.state.redirect}/>;
    }
    return (

      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="thestockco.jpg"
            width="150"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
           
          </Nav>
          <Form inline onSubmit={this.handleSubmit}>
            <FormControl type="text" size="lg" placeholder="Search" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    
            <Button variant="outline-success" size="lg" onClick={this.handleSubmit}>Search</Button>
          </Form>
          <Nav className="ml-auto">
            <NavDropdown title="User Settings" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/search">Something</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default withRouter(Navigation);
