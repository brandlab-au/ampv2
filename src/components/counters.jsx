import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 33 },
      { id: 4, value: 333 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("delete right now", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  rest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log("r", counter);
  };

  render() {
    return (
      <div>
        <button onClick={this.rest} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onIncrement={this.onIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          >
            <h3>Jonathon {counter.value}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
