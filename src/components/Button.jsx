import React from "react";

export default function Button({ none, color, backGround, children }) {
  const colorTemplates = {
    white: "#fff",
    gray: "gray",
    red: "crimson",
  };

  const buttonStyle = {
    backgroundColor: colorTemplates[backGround],
    color: colorTemplates[color],
    border: none,
  };

  return (
    <>
      <button style={buttonStyle}>{children}</button>
    </>
  );
}
