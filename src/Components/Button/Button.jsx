import React from "react";
import classes from "./Button.module.css";

function Button({ theme, onClick, children, className }) {
  let style;
  if (theme === "dark") {
    style = classes.btnDark;
  } else if (theme === "light") {
    style = classes.btnLight;
  }

  return (
    <button onClick={onClick} className={`${style} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
