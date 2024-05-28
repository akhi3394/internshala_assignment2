import React from 'react';
import { motion } from 'framer-motion';
import { Form, Row, Col, Button, Container, InputGroup } from 'react-bootstrap';
import './Scanners.css';

const Scanner = () => {
    return (
      <motion.div className="scanner-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <motion.h1 className="my-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Scanner
          </motion.h1>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="scannerName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="scannerDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Description" />
                </Form.Group>
              </Col>
            </Row>
  
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="scannerSearch">
                  <Form.Label>Search</Form.Label>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Search" />
                    <InputGroup.Text>
                      <i className="bi bi-search"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Filter</Form.Label>
                <InputGroup>
                  <Form.Control as="select">
                    <option>Equity</option>
                    <option>Commodity</option>
                    <option>Forex</option>
                  </Form.Control>
                  <Form.Control as="select">
                    <option>Nifty 50</option>
                    <option>S&P 500</option>
                  </Form.Control>
                  <Form.Control type="text" placeholder="X" />
                </InputGroup>
              </Col>
            </Row>
  
            <Row className="mb-3">
              <Col>
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="time" defaultValue="09:30" />
              </Col>
              <Col>
                <Form.Label>End Time</Form.Label>
                <Form.Control type="time" defaultValue="15:00" />
              </Col>
            </Row>
  
            <Form.Group controlId="satisfyFilter" className="mb-3">
              <Form.Check inline type="radio" label="Satisfy" name="satisfy" defaultChecked />
              <Form.Check inline type="radio" label="Not Satisfy" name="satisfy" />
            </Form.Group>
  
            <Form.Group controlId="duplicateResults" className="mb-3">
              <Form.Check type="switch" label="Duplicate results" />
            </Form.Group>
  
            <Row className="mb-3">
              <Col>
                <Button variant="primary">Timeframe</Button>
              </Col>
            </Row>
  
            <Row className="mb-3">
              <Col>
                <Form.Label>Operations</Form.Label>
                <div className="operations">
                  <Button variant="outline-secondary"><i className="bi bi-plus-lg"></i></Button>
                  <Button variant="outline-secondary"><i className="bi bi-dash-lg"></i></Button>
                  <Button variant="outline-secondary"><i className="bi bi-x-lg"></i></Button>
                  <Button variant="outline-secondary"><i className="bi bi-slash-lg"></i></Button>
                  <Button variant="outline-secondary">Number</Button>
                  <Button variant="outline-secondary">Stock LTP</Button>
                  <Button variant="outline-secondary">{'>'}</Button>
                  <Button variant="outline-secondary">{'<'}</Button>
                  <Button variant="outline-secondary">{'>='}</Button>
                  <Button variant="outline-secondary">{'<='}</Button>
                  <Button variant="outline-secondary">Cross from above to below</Button>
                  <Button variant="outline-secondary">Cross from below to above</Button>
                  <Button variant="outline-secondary">OR</Button>
                  <Button variant="outline-secondary">AND</Button>
                  <Button variant="outline-secondary">SUBTRACT</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </motion.div>
    );
  };

export default Scanner;
