import React from "react";
import classes from "./FormControl.module.css";

function FormControl({ type, label, value, onChange }) {
  return (
    <div className={classes.formControl}>
      <label>{label}</label>
      <input value={value} onChange={onChange} type={type} />
    </div>
  );
}

export default FormControl;
