import React from "react";
// import { useState } from "react";

const Card = ({ text, date, stateChange }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5px",
        marginBottom: "10px"
      }}
      onClick={stateChange}
    >
      <p>{text.substring(0, 5) + "..."}</p>
      <p>{date}</p>
      {/* <button onClick={stateChange} type="button">
        View Notice
      </button> */}
    </div>
  );
};

export default Card;
