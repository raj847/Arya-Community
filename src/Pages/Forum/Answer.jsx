import React, { useState } from "react";
import CommentButton from "../../Components/Button/CommentButton";
import Card from "../../Components/Card/Card";
import CommentList from "../../Components/Comment/CommentList";
import Markdown from "../../Components/Markdown/Markdown";
import CommentForm from "../../Components/Comment/CommentForm";
import { useSubmitAnswerComment } from "../../Hooks/useSubmitAnswerComment";
import classes from "./Answer.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function Answer({ str, comments, id }) {
  const [commentState, setCommentState] = useState(false);
  const { submitComment, errorSubmitComment, loadingSubmitComment } =
    useSubmitAnswerComment();
  const username = useSelector((state) => state.user.username);
  const uid = useSelector((state) => state.user.uid);
  const { id: questionId } = useParams();

  const submitHandler = (comment) => {
    submitComment({
      variables: {
        object: {
          author: username,
          comment: comment,
          user_id: uid,
          answer_id: id,
          question_id: questionId,
        },
      },
    });
  };

  return (
    <Card className={classes.contain}>
      <Markdown str={str} />
      <CommentList comments={comments} />
      {!commentState && <CommentButton onClick={() => setCommentState(true)} />}
      {commentState && (
        <CommentForm
          onSubmit={submitHandler}
          loading={loadingSubmitComment}
          error={errorSubmitComment}
          onCancel={() => setCommentState(false)}
        />
      )}
    </Card>
  );
}

export default Answer;
