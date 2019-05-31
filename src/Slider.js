import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import "./styles.css";

const initStyle = {
  left: 0
};

export default function Slider() {
  let [state, setState] = useState("OFF");
  let [left, setLeft] = useState(0);
  let bind = useGesture({
    onDrag: ({ delta, down }) => {
      setLeft(
        down
          ? state === "OFF"
            ? delta[0]
            : 20 + delta[0]
          : state === "OFF"
          ? 0
          : 20
      );
    }
  });
  const animatedProps = useSpring({
    left: left > 20 ? 20 : left < 0 ? 0 : left
  });

  useEffect(() => {
    setState(left > 10 ? "ON" : "OFF");
  }, [left]);

  function handleClick() {
    setState(state === "OFF" ? "ON" : "OFF");
  }
  return (
    <animated.div className="Slider" onMouseUp={handleClick}>
      <animated.div {...bind()} className="SliderBall" style={animatedProps} />
    </animated.div>
  );
}
