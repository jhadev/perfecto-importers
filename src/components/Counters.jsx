import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.props.wines.map(wine => (
          <Counter
            key={wine.id}
            onChange={this.props.onChange}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            wine={wine}
          >
            <h4>{wine.name}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
