import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import RoutesBar from "./components/RoutesBar";

function App() {
  const [randomString, setRandomString] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Reset Password App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links">
              <Link to="/Forgot" className="nav-link">
                Forgot password
              </Link>
              <Link to="/Login" className="nav-link">
                Login
              </Link>
              <Link to="/SignUp" className="nav-link">
                Signup
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RoutesBar
        randomString={randomString}
        setRandomString={setRandomString}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
}
export default App;
