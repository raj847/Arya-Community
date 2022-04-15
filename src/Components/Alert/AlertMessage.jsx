import React from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertMessage({ show, onClose, type, message }) {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={show}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertMessage;
