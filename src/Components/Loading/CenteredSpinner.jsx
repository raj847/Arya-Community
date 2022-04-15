import React from "react";
import { CircularProgress } from "@mui/material";

function CenteredSpinner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default CenteredSpinner;
