//jshint esversion: 8
import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = (props) => {
    return( 
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
        </Navbar>
    )
};

export default Header;