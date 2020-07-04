import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

import { Form, FormControl, Button } from 'react-bootstrap';

class Navigation extends Component {



  render() {
    console.log(this.props);
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
          <Form inline>
            <FormControl type="text" size="lg" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" size="lg">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <NavDropdown title="User Settings" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/search">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default withRouter(Navigation);
