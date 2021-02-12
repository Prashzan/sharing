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
import "../assets/styles/OrgRegister_1.scss";
const OrgRegister_1 = ({ history }) => {
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
                  id="btnlogin1"
                  className="btn btn-primary ml-5 text-white"
                  href="/login"
                >
                  LOGIN
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="row ">
        <div className=" col-lg-7 "></div>
        <div className=" col-sm-12 col-md-12 col-lg-5 ">
          <Card className="card mt-2">
            <p className="org ml-5 mr-5">
              <br />
              Organization Registration
              <br /> <br />
              Step 1:
            </p>
            <p className="note ml-5 mr-5">
              After submitting this form,
              <br />
              please kindly check your email to redirect to
              <br />
              final registration process
            </p>
            <Form>
              <Form.Group
                className="mb- mr-4 ml-4"
                as={Row}
                controlId="formHorizontalEmail"
              >
                <Col>
                  <Form.Control
                    className="text-center shadow p-3 bg-white rounded"
                    type="text"
                    placeholder="Organization Mail"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                className="mb-4 mr-4 ml-4"
                as={Row}
                controlId="formHorizontalPassword"
              >
                <Col>
                  <Form.Control
                    className="text-center shadow p-3 bg-white rounded"
                    type="Password"
                    placeholder="Password"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                className="mb-4 mr-4 ml-4"
                as={Row}
                controlId="formHorizontalPassword"
              >
                <Col sm={12}>
                  <Form.Control
                    className="text-center shadow p-3 bg-white rounded"
                    type="Password"
                    placeholder="Confirm Password"
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mt-2" as={Row}>
                <Col>
                  <Button
                    onClick={() => {
                      history.push("/register");
                    }}
                    className="registerbtn"
                    type="submit"
                  >
                    SIGN UP
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <p className="links">
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
export default OrgRegister_1;
