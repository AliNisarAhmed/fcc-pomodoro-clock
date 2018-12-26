import React from "react";

class Visual extends React.Component {
  render() {
    const { totalTime, currentTime } = this.props;
    let [minutes, seconds] = currentTime;
    let totalSeconds = Number(totalTime) * 60;
    let currentSeconds = 60 * Number(minutes) + Number(seconds);
    let percentage = Number(((currentSeconds / totalSeconds) * 100).toFixed(2));
    return (
      <div className="visual">
        <div className="visual__inner" style={{ width: `${percentage}%` }} />
      </div>
    );
  }
}

export default Visual;
