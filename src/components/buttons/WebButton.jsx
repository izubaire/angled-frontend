import React from "react";

const WebButton = (props) => {
  function handleClick() {
    props.handleClick();
  }

  return (
    <button className={`web-btn ${props.class}`} onClick={handleClick}>
      {props.name}
    </button>
  );
};

export default WebButton;
