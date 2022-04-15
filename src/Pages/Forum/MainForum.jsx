import React from "react";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./Forum.module.css";
import SearchIcon from "@mui/icons-material/Search";
import QuestionCard from "./QuestionCard";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import { GetAllQuestion } from "../../Graphql/query";
import LoadingQuestionCard from "../../Components/Loading/LoadingQuestionCard";
import Card from "../../Components/Card/Card";
import { useState } from "react";
import { useGetQuestionByTag } from "../../Hooks/useGetQuestionByTag";
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";

function MainForum() {
  const { data, loading, error } = useQuery(GetAllQuestion);
  const {
    getQuestionsByTag,
    errorQuestionsByTag,
    loadingQuestionsByTag,
    questionsByTag,
  } = useGetQuestionByTag();
  const [tag, setTag] = useState("");
  const [mode, setMode] = useState("all");
  const history = useHistory();

  const createQuestionHandler = () => {
    history.push("/forum/ask");
  };

  const searchHandler = () => {
    if (tag.trim().length === 0) return;
    getQuestionsByTag({
      variables: {
        tag: tag,
      },
    });
    setMode("search");
  };

  if (error || errorQuestionsByTag) {
    return <p>{error}</p>;
  }

  const showedData = mode === "all" ? data : questionsByTag;
  const isLoading = loading || loadingQuestionsByTag;

  return (
    <Container>
      <div className={classes.containCenter}>
        <div className={classes.topleft}>
          <h2>Ask and Answer</h2>
          <p>
            Place where you can ask anything and get clear answer from the{" "}
            <br />
            experienced one.
          </p>
        </div>
        <div className={classes.topright}>
          <Button
            onClick={createQuestionHandler}
            theme="light"
            className={classes.btn}
          >
            Ask a Question <HelpIcon color="" />
          </Button>
        </div>
      </div>
      <div className={classes.containTop}>
        <Button
          className={classes.showAllBtn}
          theme="light"
          onClick={() => setMode("all")}
        >
          <BorderAllOutlinedIcon />
          Show all
        </Button>
        <div className={classes.search}>
          <p>Search by tag</p>
          <div className={classes.inputWrapper}>
            <div className={classes.input}>
              <span className={classes.pgr}>#</span>
              <input
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                type="text"
                placeholder="i.e java"
              />
            </div>
            <div>
              <button onClick={searchHandler} className={classes.none}>
                <SearchIcon className={classes.searchBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading &&
        [1, 2, 3].map((i) => {
          return (
            <div key={i} className={classes.mb}>
              <LoadingQuestionCard />
            </div>
          );
        })}
      {!isLoading && (
        <div className={classes.questionContainer}>
          {showedData?.question.length === 0 && (
            <Card className={classes.noQuestion}>
              <p>There is no question.</p>
            </Card>
          )}
          {showedData?.question.map((q) => {
            return (
              <QuestionCard
                key={q.id}
                id={q.id}
                author={q.username}
                title={q.title}
                content={q.question}
                tags={q.tags}
                answer={q.answers.length}
                timestamp={q.timestamp}
              />
            );
          })}
        </div>
      )}
    </Container>
  );
}

export default MainForum;
