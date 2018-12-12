import React, { Component } from "react";
import Counter from "./Counter";

//id: 1 = rosso
//id: 2 = brunello
//id: 3 = rose

class Counters extends Component {
  state = {
    wines: [
      {
        id: 1,
        name: "Rosso",
        size: "750mL",
        region: "",
        country: "",
        value: 0,
        casePrice: 180,
        vintage: 2015
      },
      {
        id: 2,
        name: "Brunello",
        size: "750mL",
        region: "",
        country: "",
        value: 0,
        casePrice: 565,
        vintage: 2012
      },
      {
        id: 3,
        name: "Rose",
        size: "750mL",
        region: "",
        country: "",
        value: 0,
        casePrice: 160,
        vintage: 2017
      }
    ],
    totalPrice: 0
  };

  handleTotal = wineId => {
    console.log("clicked", wineId);
  };

  handleReset = () => {
    const wines = this.state.wines.map(wine => {
      wine.value = 0;
      return wine;
    });
    this.setState({ wines });
  };

  handleIncrement = wine => {
    const wines = [...this.state.wines];
    const index = wines.indexOf(wine);
    wines[index] = { ...wine };
    wines[index].value++;
    console.log(wine);
    this.setState({ wines });
  };

  handleDecrement = wine => {
    const wines = [...this.state.wines];
    const index = wines.indexOf(wine);
    wines[index] = { ...wine };
    wines[index].value--;
    console.log(wine);
    this.setState({ wines });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.state.wines.map(wine => (
          <Counter
            key={wine.id}
            onChange={this.handleTotal}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
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
