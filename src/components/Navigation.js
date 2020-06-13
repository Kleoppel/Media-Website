import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const navStyle = {
    'margin-right': '100px'
};

class Navigation extends Component {
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
        console.log(this.props);
        return (

            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src="Super_Bowl_LIV.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="title">The Stock</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <NavDropdown title="User Settings" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/search">Another action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/login" onClick={this.handleLogOut}>Log Off</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default withRouter(Navigation);
