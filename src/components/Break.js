import React from "react";
import Button from "./Button";

function Break({ breakTime, handleButtonClick }) {
  return (
    <div className="setting">
      <Button
        id="break-increment"
        direction="up"
        handleButtonClick={handleButtonClick}
      />
      <h2 id="break-label">
        Break Length:{" "}
        <span id="break-length" className="digit">
          {breakTime}
        </span>
      </h2>
      <Button
        id="break-decrement"
        direction="down"
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default Break;
