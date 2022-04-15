import { Skeleton } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import TagContainer from "../Tag/TagContainer";
import Container from "../Container/Container";
import classes from "./LoadingQuestionDetail.module.css";

function LoadingQuestionDetail() {
  return (
    <Container>
      <div className={classes.contain}>
        <h2>Question</h2>
        <Card>
          <Skeleton animation="wave" variant="rectangular" height="60px" />
          <div className={classes.line}></div>
          <Skeleton
            className={classes.skeleton}
            animation="wave"
            variant="rectangular"
            height="30px"
          />
          <Skeleton
            className={classes.skeleton}
            animation="wave"
            variant="rectangular"
            height="30px"
          />
          <Skeleton
            className={classes.skeleton}
            animation="wave"
            variant="rectangular"
            height="100px"
          />
          <TagContainer>
            <Skeleton
              animation="wave"
              width="90px"
              height="50px"
              type="rectangular"
            />
            <Skeleton
              animation="wave"
              width="90px"
              height="50px"
              type="rectangular"
            />
            <Skeleton
              animation="wave"
              width="90px"
              height="50px"
              type="rectangular"
            />
          </TagContainer>
        </Card>
      </div>

      <div className={classes.contain}>
        <Card>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height="30px"
            className={classes.skeleton}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height="30px"
            className={classes.skeleton}
          />
          <Skeleton animation="wave" variant="rectangular" height="90px" />
        </Card>
      </div>
    </Container>
  );
}

export default LoadingQuestionDetail;
