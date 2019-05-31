import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import TopLevel from "./TopLevel";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Navigation Transitions</h1>
      <h2>Parent-child transitions -> Click Item 4!</h2>
      <div style={{ height: 350 }}>
        <List />
      </div>
      <h2>Top-level transitions</h2>
      <TopLevel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
