import React, { useState } from "react";
import MyQuestion from "./MyQuestion";
import Container from "../../Components/Container/Container";
import classes from "./QuestionList.module.css";
import { useSelector } from "react-redux";
import { useGetUserQuestion } from "../../Hooks/useGetUserQuestion";
import LoadingQuestionDetail from "../../Components/Loading/LoadingQuestionDetail";
import { Alert } from "@mui/material";
import { useDeleteQuestion } from "../../Hooks/useDeleteQuestion";
import CenteredSpinner from "../../Components/Loading/CenteredSpinner";
import AlertMessage from "../../Components/Alert/AlertMessage";

function QuestionList() {
  const uid = useSelector((state) => state.user.uid);
  const { errorMyQuestions, loadingMyQuestions, myQuestions } =
    useGetUserQuestion(uid);
  const { deleteQuestion, errorDeleteQuestion, loadingDeleteQuestion } =
    useDeleteQuestion(uid);
  const [deleted, setDeleted] = useState(false);

  const deleteHandler = (id) => {
    deleteQuestion({
      variables: {
        id: id,
      },
    });
    setDeleted(true);
  };

  const handleClose = () => {
    setDeleted(false);
  };

  if (loadingMyQuestions) {
    return <LoadingQuestionDetail />;
  }

  return (
    <Container>
      {errorMyQuestions && (
        <Alert severity="error" variant="standard">
          {errorMyQuestions.message}
        </Alert>
      )}
      {errorDeleteQuestion && (
        <Alert severity="error" variant="standard">
          {errorDeleteQuestion.message}
        </Alert>
      )}
      <div className={classes.contain}>
        <h2>Your Question</h2>
        <div className={classes.questionsWrapper}>
          {loadingDeleteQuestion && <CenteredSpinner />}
          {!loadingDeleteQuestion && myQuestions.question.length === 0 && (
            <p>You haven't created a question yet</p>
          )}
          {!loadingDeleteQuestion &&
            myQuestions.question.map((question) => {
              return (
                <MyQuestion
                  deleteQuestion={deleteHandler}
                  loadingDelete={loadingDeleteQuestion}
                  questionData={question}
                  key={question.id}
                />
              );
            })}
        </div>
      </div>
      <AlertMessage
        show={deleted && !errorDeleteQuestion && !loadingDeleteQuestion}
        onClose={handleClose}
        message="Succesfully delete question"
        type="success"
      />
      <AlertMessage
        show={deleted && errorDeleteQuestion && !loadingDeleteQuestion}
        onClose={handleClose}
        message="Something went wrong"
        type="error"
      />
    </Container>
  );
}

export default QuestionList;
