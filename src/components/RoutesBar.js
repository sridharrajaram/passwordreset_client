import React from "react";
import { Route, Routes } from "react-router-dom";
import Forgot from "./Forgot";
import Home from "./Home";
import Login from "./Login";
import OpenedEmail from "./OpenedEmail";
import SignUp from "./SignUp";

function RoutesBar({ randomString, setRandomString, email, setEmail }) {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Forgot"
          element={<Forgot email={email} setEmail={setEmail} />}
        />
        <Route
          path="/retrieveAccount/:email/:randomString"
          element={<OpenedEmail />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default RoutesBar;
