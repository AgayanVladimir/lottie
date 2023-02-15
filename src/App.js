import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./lottie.json";
import "./App.css";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <div>
      <Lottie options={defaultOptions} width="500px" height="500px" />
    </div>
  );
}

export default App;
