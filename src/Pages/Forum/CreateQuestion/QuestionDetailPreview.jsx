import React from "react";
import Card from "../../../Components/Card/Card";
import Markdown from "../../../Components/Markdown/Markdown";
import classes from "./QuestionDetailPreview.module.css";

function QuestionDetailPreview({ question, code }) {
  return (
    <div className={classes.contain}>
      <h3>Your question detail preview</h3>
      <Card className={classes.previewContain}>
        <Markdown str={question} />
        <Markdown str={code} />
      </Card>
    </div>
  );
}

export default QuestionDetailPreview;
