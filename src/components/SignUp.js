import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { url } from "./UrlSettings";


function SignUp() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("please enter the required(*) fields");
    } else {
      setMessage("waiting");
      createAccount();
    }
  };

  function createAccount() {
    fetch(`${url}/users/SignUp`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((userdata) => setMessage(userdata.message));
  }

  return (
    <Container className="container">
      <Row>
        <Col xs="auto" sm="7" md="6" lg="4">
          {message === "waiting" ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : message ? (
            message
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <span className="error">*</span>Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <span className="error">*</span>Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <p className="error">{error}</p>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <br />
              <Form.Text className="text-muted">Have an account?</Form.Text>
              <br />
              <Button
                variant="success"
                type="submit"
                onClick={() => navigate("/Login")}
              >
                Log in
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
