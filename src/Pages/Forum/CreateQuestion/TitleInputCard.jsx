import React from "react";
import Card from "../../../Components/Card/Card";
import classes from "./TitleInputCard.module.css";

function TitleInputCard({ value, onChange }) {
  return (
    <Card className={classes.contain}>
      <h3>Title</h3>
      <p>Create some short title for your question summary.</p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </Card>
  );
}

export default TitleInputCard;
