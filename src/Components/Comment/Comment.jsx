import { Avatar } from "@mui/material";
import React from "react";
import classes from "./Comment.module.css";

function Comment({ author, comment, Avatar: UserAvatar }) {
  return (
    <div className={classes.contain}>
      <Avatar />
      <div>
        <h6>{author}</h6>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
