import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: [0, 55, 66, 7],
    url: "https://picsum.photos/300",
    // value: this.props.value,
  };
  style = { fontSize: 50 };
  render() {
    return (
      <div>
        <hr></hr>
        Nice to see you here lest {this.formater()}
        {this.renderTag()}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="badge badge-primary m-2 text-success"
        >
          Increament now: {this.props.value}
        </button>
        <hr></hr>
        <img src={this.state.url} />
        <p style={this.style} class="text-success">
          Loving it {this.props.children}
        </p>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
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
}

export default Counter;
