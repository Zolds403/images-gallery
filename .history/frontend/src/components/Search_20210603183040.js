//jshint esversion: 8

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder='First name' />
                </Col>
                <Col>
                  <Form.Control placeholder='Last name' />
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
};

export default Search;