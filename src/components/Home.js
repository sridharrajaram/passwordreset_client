import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="container">
      <div className="home-header">Welcome!</div>
      <div className="home-content">
        Login, signup or reset forgotten password
      </div>
    </Container>
  );
}

export default Home;
