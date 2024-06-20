import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState();

  const handleClick = (color) => {
    setActiveLight(color);
  };

  const cycleLights = () => {
    const colors = ["red", "green", "yellow"];
    const nextIndex = (colors.indexOf(activeLight) + 1) % colors.length;
    setActiveLight(colors[nextIndex]);
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div
          className={`light red ${
            activeLight === "red" ? "active" : "inactive"
          }`}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={`light yellow ${
            activeLight === "yellow" ? "active" : "inactive"
          }`}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={`light green ${
            activeLight === "green" ? "active" : "inactive"
          }`}
          onClick={() => handleClick("green")}
        ></div>
      </div>
      <button onClick={cycleLights}>Cambiar Luz</button>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.getElementById("app"));

export default App;
