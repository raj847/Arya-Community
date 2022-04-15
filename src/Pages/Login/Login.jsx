import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";
import FormControl from "../../Components/FormControl/FormControl";
import Button from "../../Components/Button/Button";
import classes from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useHistory } from "react-router-dom";
import CenteredSpinner from "../../Components/Loading/CenteredSpinner";
import { login } from "../../Store/userSlice";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = useSelector((state) => state.user.isLogin);
  const history = useHistory();
  const dispatch = useDispatch();

  if (isLogin) {
    history.replace("/forum");
  }

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            username: userAuth.user.displayName,
            uid: userAuth.user.uid,
            point: null,
            profilePictureUrl: userAuth.user.photoURL,
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Card className={classes.contain}>
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <FormControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
          />
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
          />
          <div className={classes.flexWrapper}>
            <div className={classes.remember}>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Foget Password</p>
          </div>
          {loading && <CenteredSpinner />}
          {!loading && (
            <Button className={classes.btn} theme="dark">
              Login
            </Button>
          )}
        </form>
      </Card>
    </Container>
  );
}

export default Login;
