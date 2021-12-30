import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { url } from "./UrlSettings";


function OpenedEmail() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("waiting");
  const { email, randomString } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password) {
      setMessage("waiting");
      updatePassword();
    } else {
      setError("please enter the password");
    }
  };

  function getMessage() {
    fetch(
      `${url}/retrieveAccount/${email}/${randomString}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((userdata) => setMessage(userdata.message));
  }
  function updatePassword() {
    fetch(
      `${url}/resetPassword/${email}/${randomString}`,
      {
        method: "PUT",
        body: JSON.stringify({ newPassword: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((userdata) => setMessage(userdata.message));
  }

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line
  }, []);
  
  return (
    <Container className="container">
      {message === "waiting" ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : message === "retrieve account" ? (
        <Row>
          <Col xs="auto" sm="7" md="6" lg="4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <div className="error">{error}</div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
            </Form>
          </Col>
        </Row>
      ) : (
        message
      )}
    </Container>
  );
}

export default OpenedEmail;
