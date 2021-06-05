//jshint esversion: 8
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ( { handleSubmit } ) => {
    return (
      <Container className="mt-4">
        <Row className="justify-content">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={ handleSubmit }>
              <Form.Row>
                <Col xs={9}>
                  <Form.Control placeholder="Search for new image..." />
                </Col>
                <Col>
                  <Button variant="primary" type="submit">Search</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default Search;