//jshint esversion: 8
import React from 'react';
import { Navbar } from 'react-bootstrap';

const navBarStyle = {
    backgroundColor: 'lightblue'
}

const Header = (props) => {
    const { title } = props;
    return( 
        <Navbar style={navBarStyle} variant="light">
            <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        </Navbar>
    )
};

export default Header;