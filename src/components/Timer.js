import React from "react";
import formatTime from "../helperFunctions/formatTime";

function Timer({ timerSession, timerBreak, currentTimer }) {
  if (currentTimer === "timerSession") {
    return (
      <div className="timer">
        <h2 id="timer-label">Session</h2>
        <h3 id="time-left">{formatTime(timerSession)}</h3>
      </div>
    );
  } else {
    return (
      <div className="timer">
        <h2 id="timer-label">Break</h2>
        <h3 id="time-left">{formatTime(timerBreak)}</h3>
      </div>
    );
  }
}

export default Timer;
