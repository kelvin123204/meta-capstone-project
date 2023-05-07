import React from "react";

const Rating = (props) => {
  return (
    <p>
      {props.score} / {props.cap}
    </p>
  );
};

export default Rating;
