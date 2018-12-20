import React from "react";
import Button from "./Button";

function Session({ sessionTime, handleButtonClick }) {
  return (
    <div className="setting">
      <Button
        id="session-increment"
        direction="up"
        handleButtonClick={handleButtonClick}
      />
      <h2 id="session-label">
        Session Length:{" "}
        <span id="session-length" className="digit">
          {sessionTime}
        </span>
      </h2>
      <Button
        id="session-decrement"
        direction="down"
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default Session;
