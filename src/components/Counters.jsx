import React, { Component } from "react";
import Counter from "./Counter";
import Card from "@material-ui/core/Card";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.props.wines.map(wine => (
          <Card key={wine.id} className="wineCard m-2">
            <Counter
              key={wine.id}
              onChange={this.props.onChange}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              wine={wine}
            >
              <h4>{wine.name}</h4>
              <p>{wine.casePrice}</p>
            </Counter>
          </Card>
        ))}
      </div>
    );
  }
}

export default Counters;
