// import React, { useState, useEffect } from "react";
import "./style.css";
// import code from "./files/code.png";
// import ReactDOM from "react-dom";

export default function App() {
  // const [a, seta] = useState(1);

  // useEffect(() => {});
  console.log(window.a);
  const root = document.querySelector("#root");
  const div = document.createElement("div");
  div.innerText = "hello world";
  root.appendChild(div);
  // const img = new Image();
  // img.src = code;
  // root.appendChild(img);

  // return <div className="app">app</div>;
  return 1;
}

App();
