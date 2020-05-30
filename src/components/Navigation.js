import React from 'react';
// import './Navbar.css';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

import Home from '../delete/Home2';
import Search from './Search';
const navStyle = {
    'margin-right': '100px'
}

const Navigation = (props) => {
    console.log(props);
    return (

        <Navbar bg="dark" variant="dark">

            <Navbar.Brand as={Link}  to="/">
                    <img
                        alt=""
                        src="Super_Bowl_LIV.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                <span className="title">The Stock</span>
                    </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>

                </Nav>



                <Nav className="ml-auto">
                    <NavDropdown title="User Settings" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/search">Another action</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/search">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar>

    )
}

export default withRouter(Navigation);
