import React, { useState } from "react";
import QuestionInputCard from "./QuestionInputCard";
import TagInputCard from "./TagInputCard";
import TitleInputCard from "./TitleInputCard";
import Container from "../../../Components/Container/Container";
import classes from "./CreateQuestion.module.css";
import CodeInputCard from "./CodeInputCard";
import Button from "../../../Components/Button/Button";
import QuestionDetailPreview from "./QuestionDetailPreview";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useCreateQuestion } from "../../../Hooks/useCreateQuestion";
import { draftjsToMd } from "draftjs-md-converter";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import date from "date-and-time";
import AlertMessage from "../../../Components/Alert/AlertMessage";

function CreateQuestion() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const username = useSelector((state) => state.user.username);
  const uid = useSelector((state) => state.user.uid);

  const { createQuestion, errorCreateQuestion, loadingCreateQuestion } =
    useCreateQuestion(uid);
  const [questionEditorState, setQuestionEditorState] = useState(
    EditorState.createEmpty()
  );
  const [codeEditorState, setCodeEditorState] = useState(
    EditorState.createEmpty()
  );
  const questionMarkdownState = draftjsToMd(
    convertToRaw(questionEditorState.getCurrentContent())
  );
  const codeMarkdownState = draftjsToMd(
    convertToRaw(codeEditorState.getCurrentContent())
  );
  const addTagHandler = (tag) => {
    setTags((prev) => [...prev, { tag }]);
  };

  const removeTagHandler = (removedTag) => {
    setTags((prev) => prev.filter(({ tag }) => tag !== removedTag));
  };

  const questionEditorChangeHandler = (editorState) => {
    setQuestionEditorState(editorState);
  };

  const codeEditorChangeHandler = (editorState) => {
    setCodeEditorState(editorState);
  };

  const handleClose = () => {
    setSubmitted(false);
  };

  const resetInput = () => {
    setTags([]);
    setTitle("");
    setQuestionEditorState(EditorState.createEmpty());
    setCodeEditorState(EditorState.createEmpty());
  };

  const backHandler = () => {
    history.push("/forum");
  };

  const submitHandler = () => {
    const questionObject = {
      user_id: uid,
      username: username,
      title: title,
      question: draftjsToMd(
        convertToRaw(questionEditorState.getCurrentContent())
      ),
      code: draftjsToMd(convertToRaw(codeEditorState.getCurrentContent())),
      timestamp: date.format(new Date(), "MMM-DD-YYYY"),
      tags: {
        data: tags,
      },
    };

    createQuestion({
      variables: {
        object: questionObject,
      },
    });
    resetInput();
    setSubmitted(true);
  };

  return (
    <Container className={classes.contain}>
      {loadingCreateQuestion && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress
            style={{
              width: "200px",
              height: "200px",
              color: "#333533",
              margin: "20px auto",
            }}
          />
        </Box>
      )}
      {!loadingCreateQuestion && (
        <>
          <h2>Ask your Question</h2>
          <TitleInputCard value={title} onChange={setTitle} />
          <TagInputCard
            tags={tags}
            addTag={addTagHandler}
            removeTag={removeTagHandler}
          />
          <QuestionInputCard
            editorState={questionEditorState}
            onChangeEditorState={questionEditorChangeHandler}
          />
          <CodeInputCard
            editorState={codeEditorState}
            onChangeEditorState={codeEditorChangeHandler}
          />
          <QuestionDetailPreview
            question={questionMarkdownState}
            code={codeMarkdownState}
          />
          <div className={classes.btnWrapper}>
            <Button onClick={backHandler} theme="light">
              Cancel
            </Button>
            <Button onClick={submitHandler} theme="dark">
              Ask
            </Button>
          </div>
        </>
      )}
      <AlertMessage
        show={submitted && !errorCreateQuestion && !loadingCreateQuestion}
        message="Succesfully create question."
        type="success"
        onClose={handleClose}
      />
      <AlertMessage
        show={submitted && errorCreateQuestion && !loadingCreateQuestion}
        message="Something went wrong."
        type="error"
        onClose={handleClose}
      />
    </Container>
  );
}

export default CreateQuestion;
