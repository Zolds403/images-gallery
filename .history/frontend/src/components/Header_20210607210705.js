//jshint esversion: 8

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navBarStyle = {
  backgroundColor: 'black',
};

const Header = (props) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '10rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
