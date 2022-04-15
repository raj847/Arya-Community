import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute({ path, Component }) {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log("FROM PUBLIC ROUTE = ", isLogin);

  if (isLogin) {
    return <Redirect to="/forum" />;
  }

  return <Route path={path} component={Component} />;
}

export default PublicRoute;
