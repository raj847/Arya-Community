import React from "react";
import classes from "./CommentList.module.css";
import Comment from "./Comment";

function CommentList({ comments, error }) {
  if (comments.length === 0)
    return <p className={classes.noComment}>No comment yet.</p>;

  if (error) return <p>Failed to load comment...</p>;
  return (
    <div className={classes.contain}>
      <h5>Comments</h5>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            userid={comment.user_id}
            author={comment.author}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
