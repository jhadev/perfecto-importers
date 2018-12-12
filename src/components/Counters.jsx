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

  render() {
    return (
      <div>
        {this.state.wines.map(wine => (
          <Counter
            id={wine.id}
            key={wine.id}
            value={wine.value}
            casePrice={wine.casePrice}
            name={wine.name}
            size={wine.size}
            region={wine.region}
            country={wine.country}
            onChange={this.handleTotal}
          >
            <h4>{wine.name}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
