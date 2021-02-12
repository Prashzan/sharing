import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/styles/OrgRegister_2.scss";
import {
  Form,
  Button,
  Col,
  Row,
  Card,
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
// import OrgRegister_1 from "./OrgRegister_1";
/**
 * @author
 * @function Register
 **/
const OrgRegister_2 = () => {
  const history = useHistory();
  return (
    <div className="mainbody">
      <header>
        <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect>
          <Container>
            <Navbar.Brand href="#home">OES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home" className="ml-5">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="ml-5">
                  Features
                </Nav.Link>
                <Nav.Link href="#link" className="ml-5">
                  Team
                </Nav.Link>
                <Nav.Link href="#link" className="ml-5">
                  Contact
                </Nav.Link>
                <Nav.Link
                  id="btnlogin"
                  className="btn ml-5 text-white"
                  href="/login"
                >
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="row">
        <div className="col-lg-7 "></div>
        <div className="col-sm-12 col-md-12 col-lg-5 ">
          <Card className="card mt-2">
            <p className="org pl-5">
              <br />
              Organization Registration
              <br />
              <br /> Final Step:
            </p>
            <p className="note pl-5">
              Fill in this form to complete your
              <br /> organization registration.
            </p>
            <Form>
              <Form.Group
                className="mb-4 mr-4 ml-4"
                as={Row}
                controlId="formHorizontalEmail"
              >
                <Col>
                  <Form.Control
                    className="text-center shadow p-3 bg-white rounded"
                    type="text"
                    placeholder="Organization Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                className="mb-4 mr-4 ml-4"
                as={Row}
                controlId="formHorizontaladdress"
              >
                <Col>
                  <Form.Control
                    className="text-center shadow p-3 bg-white rounded"
                    type="text"
                    placeholder="Address"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                className="mb-4 mr-4 ml-4"
                as={Row}
                controlId="formHorizontalcontact"
              >
                <Col sm={12}>
                  <Form.Control
                    className="text-center shadow p-3 bg-white rounded"
                    type="text"
                    placeholder="Contact Information"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                className="mb-4 mr-4 ml-4"
                as={Row}
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10 }}>
                  <Form.Check label="I accept the terms and conditions" />
                </Col>
              </Form.Group>
              <Form.Group className="mt-2" as={Row}>
                <Col>
                  <Button
                    id="registerbtn1"
                    onClick={() => {
                      history.push("/profile");
                    }}
                    type="submit"
                  >
                    Confirm Registration
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <p className="link1">
                  Already have an account?
                  <a className="link2" href="/login">
                    Login Here
                  </a>
                </p>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default OrgRegister_2;
