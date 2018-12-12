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
        name: "",
        size: "750mL",
        region: "",
        country: "",
        value: 0,
        casePrice: 180,
        vintage: 2015
      },
      {
        id: 2,
        name: "",
        size: "750mL",
        region: "",
        country: "",
        value: 0,
        casePrice: 565,
        vintage: 2012
      },
      {
        id: 3,
        name: "",
        size: "750mL",
        region: "",
        country: "",
        value: 0,
        casePrice: 160,
        vintage: 2017
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.wines.map(wine => (
          <Counter
            key={wine.id}
            value={wine.value}
            casePrice={wine.casePrice}
            selected={true}
            name={wine.name}
            size={wine.size}
            region={wine.region}
            country={wine.country}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
