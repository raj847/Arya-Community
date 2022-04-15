import React from "react";
import Card from "../Card/Card";
import classes from "../../Pages/Forum/QuestionCard.module.css";
import { Skeleton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import TagContainer from "../Tag/TagContainer";
import Button from "../Button/Button";

function LoadingQuestionCard() {
  return (
    <Card className={classes.card}>
      <div className={classes.headWrapper}>
        <Skeleton variant="text" width={"75%"} animation="wave" height="60px" />
        <div style={{ width: "20%" }}>
          <Skeleton animation="wave" variant="text" width={"100%"} />
          <Skeleton animation="wave" variant="text" width={"100%"} />
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.padd}>
        <div className={classes.flexWrapper}>
          <div style={{ width: "75%" }}>
            <Skeleton width="100%" animation="wave" variant="text" />
            <Skeleton width="100%" animation="wave" variant="text" />
            <Skeleton width="100%" animation="wave" variant="text" />
          </div>
          <div className={classes.forumIconWrapper}>
            <ForumIcon fontSize="large" className={classes.forumIcon} />
            <Skeleton animation="wave" width="100%" variant="text" />
          </div>
        </div>
        <TagContainer>
          {[0, 1, 10].map((item, i) => {
            return (
              <Skeleton
                animation="wave"
                key={i}
                variant="rectangular"
                height={25}
                width={70}
              />
            );
          })}
        </TagContainer>
        <div className={classes.btnWrapper}>
          <Button className={classes.btn} theme="light">
            Details
          </Button>
          <Skeleton type="text" animation="wave" />
        </div>
      </div>
    </Card>
  );
}

export default LoadingQuestionCard;
