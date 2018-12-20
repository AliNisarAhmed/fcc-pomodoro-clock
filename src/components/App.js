import React from "react";

import Break from "./Break";
import Controls from "./Controls";
import Session from "./Session";
import Timer from "./Timer";

import decrementTimer from "../helperFunctions/decrementTimer";
import defaultValues from "../defaultValues/defaultValues";
import alarm from "../sound/alarm.mp3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: defaultValues.defaultSessionTime,
      breakTime: defaultValues.defaultBreakTime,
      timerSession: defaultValues.defaultTimerSession, // [minutes, seconds] - needs to be arrays because we display the timer as mm:ss
      timerBreak: defaultValues.defaultTimerBreak,
      isTimerRunning: false,
      currentTimer: "timerSession", // or timerBreak
      timerID: null
    };
    //https://www.w3schools.com/tags/ref_av_dom.asp

    this.audio = null;
    this.getAudioElement = elem => {
      this.audio = elem;
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePauseTimer = this.handlePauseTimer.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  render() {
    return (
      <div className="app">
        <h1>Pomodoro Clock</h1>
        <div className="timerSettings">
          <Session
            sessionTime={this.state.sessionTime}
            handleButtonClick={this.handleButtonClick}
          />
          <Break
            breakTime={this.state.breakTime}
            handleButtonClick={this.handleButtonClick}
          />
        </div>
        <Timer
          timerSession={this.state.timerSession}
          timerBreak={this.state.timerBreak}
          currentTimer={this.state.currentTimer}
        />
        <Controls
          handleStartTimer={this.handleStartTimer}
          handlePauseTimer={this.handlePauseTimer}
          isTimerRunning={this.state.isTimerRunning}
          handleReset={this.handleReset}
        />
        <div>
          <audio
            src={alarm} // Audio taken from the sample project in freeCodeCamp
            type="audio/mp3"
            id="beep"
            ref={this.getAudioElement}
            preload="metadeta"
          />
        </div>
      </div>
    );
  }

  handleReset() {
    clearInterval(this.state.timerID);
    // console.log("duration: ", this.audio.duration);
    this.audio.load();
    this.setState(() => ({
      breakTime: defaultValues.defaultBreakTime,
      sessionTime: defaultValues.defaultSessionTime,
      timerBreak: defaultValues.defaultTimerBreak,
      timerSession: defaultValues.defaultTimerSession,
      isTimerRunning: false,
      currentTimer: "timerSession"
    }));
  }

  selectTimer(currentTimer) {
    // This function plays the audio, switches the timer and resets the old timer to its default value

    if (currentTimer === "timerSession") {
      currentTimer = "timerBreak";
      this.setState(prevState => ({
        timerSession: [prevState.sessionTime, 0]
      })); // resetting the last timer
    } else {
      currentTimer = "timerSession";
      this.setState(prevState => ({ timerBreak: [prevState.breakTime, 0] }));
    }

    this.setState(() => ({ currentTimer }));
    // console.log("timer changed, audio should play now");
    this.audio.play();
  }

  updateTimer() {
    // Timer Selection logic
    let currentTimer = this.state.currentTimer;
    let [minutes, seconds] = this.state[currentTimer];
    if (minutes === 0 && seconds === 0) {
      this.selectTimer(currentTimer);
      return null;
    }

    // Update Timer Logic
    if (this.state.currentTimer === "timerSession") {
      this.setState(prevState => ({
        timerSession: decrementTimer(prevState.timerSession)
      }));
    } else {
      this.setState(prevState => ({
        timerBreak: decrementTimer(prevState.timerBreak)
      }));
    }
  }

  handleStartTimer() {
    let timer = setInterval(this.updateTimer, 1000);
    this.setState(prevState => ({ timerID: timer, isTimerRunning: true }));
  }

  handlePauseTimer() {
    clearInterval(this.state.timerID);
    this.setState(prevState => ({ isTimerRunning: false }));
  }

  handleButtonClick(direction, type) {
    if (!this.state.isTimerRunning) {
      if (type === "break-increment") {
        if (this.state.breakTime !== 60) {
          this.setState(prevState => ({
            breakTime: prevState.breakTime + 1,
            timerBreak: [prevState.breakTime + 1, 0],
            timerSession: [prevState.sessionTime, 0]
          }));
        }
      } else if (type === "break-decrement") {
        if (this.state.breakTime > 1) {
          this.setState(prevState => ({
            breakTime: prevState.breakTime - 1,
            timerBreak: [prevState.breakTime - 1, 0],
            timerSession: [prevState.sessionTime, 0]
          }));
        }
      } else if (type === "session-increment") {
        if (this.state.sessionTime !== 60) {
          this.setState(prevState => ({
            sessionTime: prevState.sessionTime + 1,
            timerSession: [prevState.sessionTime + 1, 0],
            timerBreak: [prevState.breakTime, 0]
          }));
        }
      } else if (type === "session-decrement") {
        if (this.state.sessionTime > 1) {
          this.setState(prevState => ({
            sessionTime: prevState.sessionTime - 1,
            timerSession: [prevState.sessionTime - 1, 0],
            timerBreak: [prevState.breakTime, 0]
          }));
        }
      }
    }
  }
}

export default App;
