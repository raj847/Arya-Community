import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

function LoadingBlogCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Skeleton variant="rectangular" height="140px" animation="wave" />
      <CardContent>
        <Skeleton variant="rectangular" height="30px" animation="wave" />
        <Skeleton variant="text" animation="wave" />
      </CardContent>
      <CardActions>
        <Skeleton variant="text" animation="wave" width="90px" />
      </CardActions>
    </Card>
  );
}

export default LoadingBlogCard;
