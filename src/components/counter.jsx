import React, { Component } from "react";

class Counter extends Component {
  state = { count: [0, 55, 66, 7] };
  render() {
    return (
      <p>
        <p>this is the top part</p>
        Nice to see you here {this.formater()}
        {this.state.count.map((c) => (
          <li>c</li>
        ))}
      </p>
    );
  }

  formater() {
    const short = this.state.count;
    return short[0] === 0 ? "Zero" : short;
  }
}

export default Counter;
