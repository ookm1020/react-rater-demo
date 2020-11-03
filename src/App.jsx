import React, { Component } from "react";

import AnimatedRater from "./AnimatedRater";

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="rater-wrap">
          <AnimatedRater />
        </div>
      </div>
    );
  }
}
