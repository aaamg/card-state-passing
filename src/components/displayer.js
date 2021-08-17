import React from "react";

const Displayer = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5px",
        marginBottom: "10px",
        height: "200px",
        width: "200px"
      }}
    >
      <p>{props.text}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default Displayer;
