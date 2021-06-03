//jshint esversion: 8
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return{
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Navbar>
    }
};

export default Header;