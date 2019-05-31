import React, { useState, Fragment, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated, config, useChain } from "react-spring";

import "./styles.css";

const stiffer = { mass: 1, tension: 250, friction: 25 };

export default function List() {
  let [hoveredId, setHoveredId] = useState();

  const spring1Ref = useRef();
  const { boxShadow } = useSpring({
    ref: spring1Ref,
    // config: config.stiff,
    config: stiffer,
    from: {
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0.1), 0 0px 0px rgba(0, 0, 0, 0.1)"
    },
    to: {
      boxShadow: hoveredId
        ? "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
        : "0 0px 0px rgba(0, 0, 0, 0.1), 0 0px 0px rgba(0, 0, 0, 0.1)"
    }
  });

  const spring2Ref = useRef();
  const { height, top } = useSpring({
    ref: spring2Ref,
    // config: config.stiff,
    config: stiffer,
    from: { height: 60, top: 180 },
    to: {
      top: hoveredId ? 0 : 180,
      height: hoveredId ? 300 : 60
    }
  });

  useChain(hoveredId ? [spring1Ref, spring2Ref] : [spring2Ref, spring1Ref], [
    0,
    0.2
  ]);

  const { x, c } = useSpring({
    config: config.wobbly,
    from: {
      x: 0,
      c: "#f44262"
    },
    to: {
      x: hoveredId ? 500 : 150,
      c: hoveredId ? "coral" : "#f44262"
    }
    // x: hoveredId ? 100 : 50
  });

  return (
    <Fragment>
      <div>
        Hello:{" "}
        <animated.div
          style={{
            height: 5,
            background: c,
            width: x
          }}
        />
      </div>
      <animated.ul className="List">
        <li className="ListItem" style={{ position: "absolute", top: 0 }}>
          Item 1
        </li>
        <li className="ListItem" style={{ position: "absolute", top: 60 }}>
          Item 2
        </li>
        <li className="ListItem" style={{ position: "absolute", top: 120 }}>
          Item 3
        </li>
        <animated.li
          style={{
            boxShadow: boxShadow,
            top: top,
            height: height,
            width: "100%",
            position: "absolute",
            zIndex: 100,
            overflow: "hidden"
          }}
          onClick={() => setHoveredId(!hoveredId)}
          className="ListItem"
        >
          Item 4
        </animated.li>
        <li className="ListItem" style={{ position: "absolute", top: 240 }}>
          Item 5
        </li>
      </animated.ul>
    </Fragment>
  );
}
