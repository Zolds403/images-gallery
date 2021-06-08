//jshint esversion: 8

import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is a simple application that retrieves photos using Unsplash API. In order to start enter any search term in the input field.
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
    </p>
  </Jumbotron>
);

export default Welcome;
