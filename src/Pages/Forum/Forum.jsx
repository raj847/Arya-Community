import React from "react";

import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import CreateQuestion from "./CreateQuestion/CreateQuestion";
import MainForum from "./MainForum";
import QuestionDetail from "./QuestionDetail";

function Forum() {
  return (
    <Switch>
      <Route path="/forum" exact component={MainForum} />
      <PrivateRoute path="/forum/detail/:id" exact Component={QuestionDetail} />
      <PrivateRoute path="/forum/ask" exact Component={CreateQuestion} />
    </Switch>
  );
}

export default Forum;
