import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import FormControl from "../../Components/FormControl/FormControl";
import Button from "../../Components/Button/Button";
import classes from "./Register.module.css";
import { auth } from "../../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useInsertNewUser } from "../../Hooks/useInsertNewUser";
import { useDispatch } from "react-redux";
import { login } from "../../Store/userSlice";
import CenteredSpinner from "../../Components/Loading/CenteredSpinner";
import { Alert } from "@mui/material";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAuth, setErrorAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const { insertUser, errorInsertUser, loadingInsertUser } = useInsertNewUser();
  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();
    setLoadingAuth(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(() => {
          insertUser({
            variables: {
              object: {
                username: auth.currentUser.displayName,
                uid: auth.currentUser.uid,
              },
            },
          });
          dispatch(
            login({
              username: auth.currentUser.displayName,
              uid: auth.currentUser.uid,
              profilePictureUrl: auth.currentUser.photoURL,
              point: 0,
            })
          );
          setLoadingAuth(false);
        });
      })
      .catch((err) => {
        setLoadingAuth(false);
        setErrorAuth(err);
      });
  };

  const isLoading = loadingAuth || loadingInsertUser;
  const isError = errorAuth || errorInsertUser;

  return (
    <Container>
      <Card className={classes.contain}>
        <h2>Register</h2>
        <form onSubmit={registerHandler}>
          <FormControl
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            type="text"
          />
          <FormControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="text"
          />
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
          />
          {isLoading && <CenteredSpinner />}
          {isError && (
            <Alert variant="standard" severity="error">
              Something went wrong, please try again later.
            </Alert>
          )}
          {!isLoading && (
            <Button className={classes.btn} theme="dark">
              Register
            </Button>
          )}
        </form>
      </Card>
    </Container>
  );
}

export default Register;
