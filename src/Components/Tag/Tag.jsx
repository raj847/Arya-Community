import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Tag({ text, onRemove, removeable, size }) {
  const removeHandler = () => {
    onRemove(text);
  };

  return (
    <p
      style={{
        backgroundColor: "#F5CB5C66",
        boxShadow: "1px 1px 3px 0px #00000040",
        borderRadius: size === "small" ? "4px" : "7px",
        padding: size === "small" ? "1px 5px" : "2px 9px",
        color: "#333533",
        fontSize: size === "small" ? "12px" : "18px",
        display: "flex",
        alignItems: "center",
        columnGap: size === "small" ? "3px" : "7px",
      }}
    >
      #{text}
      {removeable && (
        <button
          style={{
            background: "none",
            outline: "none",
            border: "none",
            height: "fit-content",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
          }}
          onClick={removeHandler}
        >
          <CloseIcon fontSize="small" />
        </button>
      )}
    </p>
  );
}

export default Tag;
