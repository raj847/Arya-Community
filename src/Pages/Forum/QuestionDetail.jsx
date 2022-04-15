import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Container from "../../Components/Container/Container";
import QuestionDetailCard from "./QuestionDetailCard";
import classes from "./QuestionDetail.module.css";
import Answer from "./Answer";
import TextEditor from "../../Components/Editor/TextEditor";
import Markdown from "../../Components/Markdown/Markdown";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { useSubmitAnswer } from "../../Hooks/useSubmitAnswer";
import { useParams } from "react-router";
import LoadingQuestionDetail from "../../Components/Loading/LoadingQuestionDetail";
import { useSubscribeQuestionDetail } from "../../Hooks/useSubscribeQuestionDetail";
import { CircularProgress } from "@mui/material";
import { draftjsToMd } from "draftjs-md-converter";
import { useSelector } from "react-redux";

function QuestionDetail() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  let markDownState = draftjsToMd(
    convertToRaw(editorState.getCurrentContent())
  );

  const { id } = useParams();
  const username = useSelector((state) => state.user.username);
  const uid = useSelector((state) => state.user.uid);
  const { submitAnswer, loadingSubmitAnswer, errorSubmitAnswer } =
    useSubmitAnswer(id);
  const { errorQuestionData, loadingQuestionData, questionData } =
    useSubscribeQuestionDetail(id);

  const editorStateChangeHandler = (editorState) => {
    setEditorState(editorState);
  };

  if (loadingQuestionData) {
    return <LoadingQuestionDetail />;
  }

  if (errorQuestionData) {
    return <p>error</p>;
  }

  const { answers, ...data } = questionData.question_by_pk;

  const submitHandler = () => {
    const answerObject = {
      user_id: uid,
      author: username,
      question_id: id,
      answer: markDownState,
    };
    submitAnswer({
      variables: {
        object: answerObject,
      },
    });
    setEditorState(EditorState.createEmpty());
  };

  return (
    <Container>
      <div className={classes.questionContain}>
        <h2>Question</h2>
        <QuestionDetailCard data={data} />
      </div>

      <div className={classes.answerContain}>
        <h2>{answers.length} Answer</h2>
        {answers.map((ans) => {
          return (
            <Answer
              key={ans.id}
              id={ans.id}
              str={ans.answer}
              comments={ans.answer_comments}
            />
          );
        })}
      </div>
      {loadingSubmitAnswer && (
        <Card className={classes.spinnerContain}>
          <CircularProgress className={classes.spinner} />
        </Card>
      )}
      {!loadingSubmitAnswer && (
        <>
          <div className={classes.editorContain}>
            <h2>Type your answer here</h2>
            <TextEditor
              editorState={editorState}
              onChange={editorStateChangeHandler}
            />
          </div>
          <div className={classes.previewContain}>
            <h2>Your answer preview</h2>
            <Card className={classes.card}>
              <Markdown str={markDownState} />
            </Card>
          </div>

          <p>{errorSubmitAnswer && errorSubmitAnswer.message}</p>
          <div className={classes.btnContain}>
            <Button theme="light">Cancel</Button>
            <Button onClick={submitHandler} theme="dark">
              Answer
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default QuestionDetail;
