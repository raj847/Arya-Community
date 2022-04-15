import React from "react";

function TagContainer({ children, size }) {
  return (
    <div
      style={{
        display: "flex",
        columnGap: size === "small" ? "4px" : "10px",
        rowGap: "5px",
        margin: "5px 0",
        marginBottom: "15px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}

export default TagContainer;
