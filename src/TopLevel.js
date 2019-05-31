import React, { useState, Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated, config, useChain } from "react-spring";

import "./styles.css";

const stiffer = { mass: 1, tension: 400, friction: 30 };

export default function List() {
  let [selectedPage, setSelectedPage] = useState("GREEN");

  const {
    scaleRed,
    opacityRed,
    navBottomSizeRed,
    navBottomColorRed
  } = useSpring({
    config: stiffer,
    from: {
      scaleRed: "scale(0)",
      opacityRed: 0,
      navBottomSizeRed: "scale(1)",
      navBottomColorRed: "lightgray"
    },
    to: {
      scaleRed: selectedPage === "RED" ? "scale(1)" : "scale(0)",
      opacityRed: selectedPage === "RED" ? 1 : 0,
      navBottomSizeRed: selectedPage === "RED" ? "scale(1.2)" : "scale(1)",
      navBottomColorRed: selectedPage === "RED" ? "#e96368" : "lightgray"
    }
  });

  const {
    scaleGreen,
    opacityGreen,
    navBottomSizeGreen,
    navBottomColorGreen
  } = useSpring({
    config: stiffer,
    from: {
      scaleGreen: "scale(0)",
      opacityGreen: 0,
      navBottomSizeGreen: "scale(1)",
      navBottomColorGreen: "lightgray"
    },
    to: {
      scaleGreen: selectedPage === "GREEN" ? "scale(1)" : "scale(0)",
      opacityGreen: selectedPage === "GREEN" ? 1 : 0,
      navBottomSizeGreen: selectedPage === "GREEN" ? "scale(1.2)" : "scale(1)",
      navBottomColorGreen: selectedPage === "GREEN" ? "#53cc82" : "lightgray"
    }
  });

  const {
    scaleBlue,
    opacityBlue,
    navBottomSizeBlue,
    navBottomColorBlue
  } = useSpring({
    config: stiffer,
    from: {
      scaleBlue: "scale(0)",
      opacityBlue: 0,
      navBottomSizeBlue: "scale(1)",
      navBottomColorBlue: "lightgray"
    },
    to: {
      scaleBlue: selectedPage === "BLUE" ? "scale(1)" : "scale(0)",
      opacityBlue: selectedPage === "BLUE" ? 1 : 0,
      navBottomSizeBlue: selectedPage === "BLUE" ? "scale(1.2)" : "scale(1)",
      navBottomColorBlue: selectedPage === "BLUE" ? "#5d5df7" : "lightgray"
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        borderRadius: 10,
        height: 300,
        width: 200
      }}
    >
      <div style={{ flex: 1, position: "relative" }}>
        <Content
          color="rgba(233, 99, 104, 0.1)"
          borderColor="#e96368"
          scale={scaleRed}
          opacity={opacityRed}
        />
        <Content
          color="rgba(83, 204, 130, 0.1)"
          borderColor="#53cc82"
          scale={scaleGreen}
          opacity={opacityGreen}
        />
        <Content
          color="rgba(93, 93, 247, 0.1)"
          borderColor="#5d5df7"
          scale={scaleBlue}
          opacity={opacityBlue}
        />
      </div>
      <div
        style={{
          height: 20,
          padding: "10px 20px",
          boxShadow: "0px -9px 25px rgba(0, 0, 0, 0.19)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <MenuItem
          color={navBottomColorRed}
          size={navBottomSizeRed}
          onClick={() => setSelectedPage("RED")}
        />
        <MenuItem
          color={navBottomColorGreen}
          size={navBottomSizeGreen}
          onClick={() => setSelectedPage("GREEN")}
        />
        <MenuItem
          color={navBottomColorBlue}
          size={navBottomSizeBlue}
          onClick={() => setSelectedPage("BLUE")}
        />
      </div>
    </div>
  );
}

function MenuItem({ color = "lightgray", size = 1, ...rest }) {
  return (
    <animated.div
      style={{
        height: 8,
        width: 8,
        borderRadius: 100,
        background: color,
        cursor: "pointer",
        transform: size
      }}
      {...rest}
    />
  );
}

function Content({ color, borderColor, scale, opacity }) {
  return (
    <animated.div
      style={{
        height: "100%",
        width: "100%",
        // borderRadius: 100,
        background: color,
        cursor: "pointer",
        border: `1px solid ${borderColor}`,
        borderBottom: "none",
        transform: scale,
        opacity: opacity,
        position: "absolute"
      }}
    />
  );
}
