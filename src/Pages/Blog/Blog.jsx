import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogDetail from "../BlogDetail/BlogDetail";
import CreateBlog from "./CreateBlog/CreateBlog";
import MainBlog from "./MainBlog/MainBlog";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
function Blog() {
  return (
    <Switch>
      <Route path="/blog" exact component={MainBlog} />
      <PrivateRoute path="/blog/create-blog" exact Component={CreateBlog} />
      <Route path="/blog/:id" exact component={BlogDetail} />
    </Switch>
  );
}

export default Blog;
