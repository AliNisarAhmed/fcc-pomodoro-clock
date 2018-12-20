import React from "react";

function Controls({
  handleStartTimer,
  handlePauseTimer,
  isTimerRunning,
  handleReset
}) {
  return (
    <div className="controls">
      {!isTimerRunning ? (
        <button id="start_stop" onClick={() => handleStartTimer()}>
          Start
        </button>
      ) : (
        <button id="start_stop" onClick={() => handlePauseTimer()}>
          Pause
        </button>
      )}
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
