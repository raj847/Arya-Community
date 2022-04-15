import React from "react";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import classes from "./MyQuestion.module.css";
import Tag from "../../Components/Tag/Tag";
import TagContainer from "../../Components/Tag/TagContainer";
import Markdown from "../../Components/Markdown/Markdown";
import { Link, useHistory } from "react-router-dom";

function MyQuestion({ questionData, deleteQuestion }) {
  const { code, title, id, question, tags } = questionData;
  const history = useHistory();
  // const openModal
  const editHandler = () => {
    history.push({
      pathname: `/edit-question/${id}`,
      state: {
        data: questionData,
      },
    });
  };

  const deleteHandler = () => {
    deleteQuestion(id);
  };

  return (
    <Card>
      <div className={classes.contain}>
        <h3>{title}</h3>
        <div className={classes.line}></div>
        <Markdown str={question} />
        <Markdown str={code} />
        <TagContainer>
          {tags.map(({ id, tag }) => {
            return <Tag key={id} text={tag} />;
          })}
        </TagContainer>
        <div className={classes.actionWrapper}>
          <div className={classes.btnWrapper}>
            <Button onClick={editHandler} theme="light">
              Edit
            </Button>
            <Button theme="dark" onClick={deleteHandler}>
              Delete
            </Button>
          </div>
          <Link style={{ alignSelf: "flex-end" }} to={`/forum/detail/${id}`}>
            details
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default MyQuestion;
