//jshint esversion:6
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzY4OTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjMwMTIwMDM&ixlib=rb-1.2.1&q=80&w=400"
      />
      <Card.Body>
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
