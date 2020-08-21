import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

export default function App() {
  //<div className="app">app</div>;
  return React.createElement("div", { className: "app" }, "app");
}

ReactDOM.render(React.createElement(App), document.body);

// 不需要loader解析
