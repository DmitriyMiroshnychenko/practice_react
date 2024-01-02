import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
