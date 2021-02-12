import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Userlogin from "../assets/images/Userlogin.PNG";
// import "../assets/styles/OrgLogin.scss";
const OrgLogin = () => {
  return (
    <Container>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">OES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="#home" className="mx-3 ">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-3">
                Features
              </Nav.Link>
              <Nav.Link href="#link" className="mx-3">
                Team
              </Nav.Link>
              <Nav.Link href="#link" className="mx-3">
                Contact
              </Nav.Link>
              <Nav.Link
                id="btnlogin"
                className="btn ml-4 text-white"
                href="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col md={6} className="img">
          <Row>
            <Card.Img variant="top" src={Userlogin} />
          </Row>
        </Col>
        <Col md={5} sm={12} xs={12} className=" font content">
          <h2 variant="dark" className="head">
            LOGIN
          </h2>
          <p className="para">Select your account type Organization/Student</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Select Account Type</option>
            <option>Organization</option>
            <option>Student</option>
          </select>
          <br />
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              placeholder="Enter Email Address"
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              placeholder="Enter Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember Me"
              className="checkbox"
            />
          </Form.Group>
          <a className="anchor" href="#">
            Forgot your Password?
          </a>
          <div className="text-center mt-4">
            <Button type="submit" id="btnlogin">
              SIGN IN
            </Button>
            <p className="bottompara">Not a member?</p>
            <a className="anchor2" href="#">
              Register
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default OrgLogin;
