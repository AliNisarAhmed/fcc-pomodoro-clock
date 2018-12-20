import React from "react";
import { render } from "react-dom";

import "./styles/styles.scss";

import App from './components/App';

// App
  // Pomodoro (Heading or Intro to the App)
  // Break - Displays break time and allows user to increase or decrease it
  // Session - Displays session time and allows user to incr/decr it
  // Timer - displays the starting time, and also counts down session and break times.
  // Controls - includes buttons to play, pause and reset the app. 

render(<App />, document.getElementById("app"));
