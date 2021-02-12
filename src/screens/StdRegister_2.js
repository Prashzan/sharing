import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import registrationImage from "../assets/images/registration.png";
import { Link } from "react-router-dom";
import "../assets/styles/StdLogin_Register.scss";

/**
 * @author
 * @function StdFinal
 **/
const StdRegister_2 = (props) => {
  return (
    <Container className="my-3">
      <Row>
        <Col md={6} sm={12} xs={12}>
          <h2 variant="dark">STUDENT REGISTRATION</h2>
          <h3>GET,SET & GO</h3>
          <p className="text-dark">
            Fill in the form below and <br />
            get your student account running for your school.
          </p>
          <Form className="text-center">
            <Row>
              <Col xs={12} sm={12} md={6}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Organization Key(Key by your School)"
              />
            </Form.Group>
            <Link to="/regfinal">
              <Button variant="outline-primary reg" type="submit">
                Register
              </Button>
            </Link>
          </Form>
        </Col>
        <Col md={6}>
          <Row>
            <Card.Img variant="top" src={registrationImage} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default StdRegister_2;
