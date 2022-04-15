import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ path, Component }) {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log("ISLOGIN = ", isLogin);
  if (!isLogin) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} component={Component} />;
}

export default PrivateRoute;
