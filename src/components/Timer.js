import React from "react";
import formatTime from "../helperFunctions/formatTime";
import Visual from "./Visual";

function Timer({
  timerSession,
  timerBreak,
  currentTimer,
  sessionTime,
  breakTime
}) {
  if (currentTimer === "timerSession") {
    return (
      <div className="timer">
        <h2 id="timer-label">Session</h2>
        <h3 id="time-left">{formatTime(timerSession)}</h3>
        <Visual totalTime={sessionTime} currentTime={timerSession} />
      </div>
    );
  } else {
    return (
      <div className="timer">
        <h2 id="timer-label">Break</h2>
        <h3 id="time-left">{formatTime(timerBreak)}</h3>
        <Visual totalTime={breakTime} currentTime={timerBreak} />
      </div>
    );
  }
}

export default Timer;
