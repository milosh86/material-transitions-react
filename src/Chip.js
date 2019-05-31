import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

import "./styles.css";

const initStyle = {
  borderRadius: 15,
  height: 15,
  minHeight: 12,
  // width: 100,
  top: 0,
  overflow: "hidden"
};

export default function Chip({ title, details }) {
  let [isOpen, setIsOpen] = useState(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    ...initStyle
    // config: { mass: 20, tension: 1000, friction: 100, precision: 0.00001 }
  }));

  function handleClick() {
    setIsOpen(true);
    setAnimatedProps({
      borderRadius: 10,
      height: 200,
      width: 200,
      top: -30
    });
  }

  function handleBlur() {
    setIsOpen(false);
    setAnimatedProps(initStyle);
  }

  return (
    <animated.div
      tabIndex={-1}
      className={isOpen ? "Chip Chip--open" : "Chip"}
      onClick={handleClick}
      onBlur={handleBlur}
      style={animatedProps}
    >
      {title}
      <div className="Details">
        {details.map(text => (
          <div className="DetailsItem">{text}</div>
        ))}
      </div>
    </animated.div>
  );
}
