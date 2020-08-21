// import React, { useState, useEffect } from "react";
import "./style.css";
// import code from "./files/code.png";
// import ReactDOM from "react-dom";
// import _ from "lodash";

export default function App() {
  // const [a, seta] = useState(1);
  // useEffect(() => {});
  console.log(window.a);
  const root = document.querySelector("body");
  const div = document.createElement("div");
  div.innerText = "hello world.";
  div.addEventListener("click", () => {
    import("./dynamic");
  });
  root.appendChild(div);
  // const img = new Image();
  // img.src = code;
  // root.appendChild(img);

  // return <div className="app">app</div>;
  return 1;
}

App();
