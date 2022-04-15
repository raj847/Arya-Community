import React from "react";
import Button from "../Button/Button";
import classes from "./LoginHeader.module.css";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <>
      <Link to="/login">
        <Button className={classes.btn} theme="light">
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button className={classes.btn} theme="dark">
          Register
        </Button>
      </Link>
    </>
  );
}

export default LoginHeader;
