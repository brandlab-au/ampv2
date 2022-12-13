import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: [0, 55, 66, 7],
    url: "https://picsum.photos/300",
    value: 33,
  };
  style = { fontSize: 50 };
  render() {
    return (
      <div>
        <p>Coolie O</p>
        Nice to see you here {this.formater()}
        {this.renderTag()}
        <button
          onClick={() => this.increament({ pro: 3 })}
          className="badge badge-primary m-2 text-success"
        >
          Increament : {this.state.value}
        </button>
        <hr></hr>
        <img src={this.state.url} />
        <p style={this.style} class="text-success">
          .Loving it
        </p>
      </div>
    );
  }
  renderTag() {
    if (this.state.count == 0) return "Nothing in tags";
    return this.state.count.map((c) => <li key={c}>{c}</li>);
  }
  formater() {
    const short = this.state.count;
    return short[0] === 0 ? "Zero" : short;
  }
  increament = (pro) => {
    console.log("Nice", pro);
    this.setState({ value: this.state.value + 1 });
    console.log("nice");
  };
}

export default Counter;
