import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/navbar.css';
import logo from './assets/images/logo.png'

class CustomNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img src={logo} className="navlogo" alt=""></img>
                Shrinkify
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default CustomNav