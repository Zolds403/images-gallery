//jshint esversion: 8

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navBarStyle = {
  backgroundColor: 'lightblue',
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Logo />
      </Container>
    </Navbar>
  );
};

export default Header;
