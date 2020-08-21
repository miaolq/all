import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

export default function App() {
  const click = () => {
    import("./dynamic");
  };

  return (
    <div className="app" onClick={click}>
      app
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
