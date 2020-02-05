import React from "react";
import "./styles.css";
import DaysCompleted from "./Components/DaysCompleted";
import CheckinData from "./data";

// Stops putting massive data in my code!!!
const checkins = CheckinData;

export default function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <DaysCompleted days={2} checking={checkins} />
    </div>
  );
}
