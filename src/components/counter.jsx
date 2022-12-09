import React, { Component } from "react";

class Counter extends Component {
  state = { count: 34 };
  render() {
    return <p>Nice to see yuou {this.state.count}</p>;
  }
}

export default Counter;
