import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import registrationImage from "../assets/images/registration.png";
import { Link } from "react-router-dom";
import "../assets/styles/StdLogin_Register.scss";
/**
 * @author
 * @function Student
 **/
const StdRegister_1 = (props) => {
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
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Link to="/std_register_2">
              <Button variant="outline-primary reg" type="submit">
                Next Step
              </Button>
            </Link>
          </Form>
        </Col>
        <Col md={6}>
          <Row>
            {" "}
            <Card.Img variant="top" src={registrationImage} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default StdRegister_1;
