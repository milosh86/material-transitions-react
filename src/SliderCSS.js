import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import "./styles.css";

export default function SliderCSS() {
  let [state, setState] = useState("OFF");

  function handleClick() {
    setState(state === "OFF" ? "ON" : "OFF");
  }
  return (
    <div className="Slider" onMouseUp={handleClick}>
      <div
        className={state === "ON" ? "SliderBall SliderBall-On" : "SliderBall"}
      />
    </div>
  );
}
