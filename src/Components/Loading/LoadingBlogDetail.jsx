import { Skeleton } from "@mui/material";
import React from "react";
import classes from "./LoadingBlogDetail.module.css";

const MySkeleton = ({ width, height, type = "rectangular" }) => {
  return (
    <Skeleton variant={type} width={width} height={height} animation="wave" />
  );
};

function LoadingBlogDetail() {
  return (
    <div>
      <div className={classes.head}>
        <MySkeleton width="60%" height="50px" />
        <MySkeleton width="30%" type="text" />
        <div className={classes.tags}>
          <MySkeleton width="90px" height="25px" />
          <MySkeleton width="90px" height="25px" />
          <MySkeleton width="90px" height="25px" />
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.content}>
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
        <MySkeleton type="text" />
      </div>
    </div>
  );
}

export default LoadingBlogDetail;
