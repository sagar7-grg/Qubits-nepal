import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import Wobble from "react-reveal/Wobble";

function Button(props) {
  return (
    <Wobble>
      <Link to="/home" className="button">
        {props.name}
      </Link>
    </Wobble>
  );
}

export default Button;
