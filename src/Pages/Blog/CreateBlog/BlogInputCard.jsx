import React from "react";
import Card from "../../../Components/Card/Card";
import TextEditor from "../../../Components/Editor/TextEditor";
import classes from "./BlogInputCard.module.css";

function BlogInputCard({ state, onChange }) {
  return (
    <>
      <Card className={classes.contain}>
        <h3>Type your blog</h3>
      </Card>
      <TextEditor editorState={state} onChange={onChange} />
    </>
  );
}

export default BlogInputCard;
