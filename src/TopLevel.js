import React, { useState, Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated, config, useChain } from "react-spring";

import "./styles.css";

const stiffer = { mass: 1, tension: 250, friction: 25 };

export default function List() {
  let [selectedPage, setSelectedPage] = useState("GREEN");

  const { scaleRed, navBottomSizeRed, navBottomColorRed } = useSpring({
    config: stiffer,
    from: {
      scaleRed: "scale(0)",
      navBottomSizeRed: 8,
      navBottomColorRed: "lightgray"
    },
    to: {
      scaleRed: selectedPage === "RED" ? "scale(1)" : "scale(0)",
      navBottomSizeRed: selectedPage === "RED" ? 12 : 8,
      navBottomColorRed: selectedPage === "RED" ? "#e96368" : "lightgray"
    }
  });

  const { scaleGreen, navBottomSizeGreen, navBottomColorGreen } = useSpring({
    config: stiffer,
    from: {
      scaleGreen: "scale(0)",
      navBottomSizeGreen: 8,
      navBottomColorGreen: "lightgray"
    },
    to: {
      scaleGreen: selectedPage === "GREEN" ? "scale(1)" : "scale(0)",
      navBottomSizeGreen: selectedPage === "GREEN" ? 12 : 8,
      navBottomColorGreen: selectedPage === "GREEN" ? "#53cc82" : "lightgray"
    }
  });

  const { scaleBlue, navBottomSizeBlue, navBottomColorBlue } = useSpring({
    config: stiffer,
    from: {
      scaleBlue: "scale(0)",
      navBottomSizeBlue: 8,
      navBottomColorBlue: "lightgray"
    },
    to: {
      scaleBlue: selectedPage === "BLUE" ? "scale(1)" : "scale(0)",
      navBottomSizeBlue: selectedPage === "BLUE" ? 12 : 8,
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
        />
        <Content
          color="rgba(83, 204, 130, 0.1)"
          borderColor="#53cc82"
          scale={scaleGreen}
        />
        <Content
          color="rgba(93, 93, 247, 0.1)"
          borderColor="#5d5df7"
          scale={scaleBlue}
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

function MenuItem({ color = "lightgray", size = 12, ...rest }) {
  return (
    <div style={{ width: 30 }}>
      <animated.div
        style={{
          height: size,
          width: size,
          borderRadius: 100,
          background: color,
          cursor: "pointer"
        }}
        {...rest}
      />
    </div>
  );
}

function Content({ color, borderColor, scale }) {
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
        position: "absolute"
      }}
    />
  );
}
