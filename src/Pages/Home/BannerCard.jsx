import React from "react";
import classes from "./BannerCard.module.css";
import Button from "../../Components/Button/Button";
import { useHistory } from "react-router";

function BannerCard({ title, content, action, link }) {
  const history = useHistory();

  const clickHandler = () => {
    history.push(link);
  };
  return (
    <div className={classes.bannerCard}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button onClick={clickHandler} className={classes.btn} theme="dark">
        {action}
      </Button>
    </div>
  );
}

export default BannerCard;
