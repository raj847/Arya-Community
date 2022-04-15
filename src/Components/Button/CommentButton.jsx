import React from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import classes from "./CommentButton.module.css";

function CommentButton({ onClick, className, style }) {
  return (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={`${classes.btn} ${className}`}
    >
      <AddCommentIcon />
      add a comment
    </button>
  );
}

export default CommentButton;
