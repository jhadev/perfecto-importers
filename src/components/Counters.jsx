import React, { Component } from "react";
import Counter from "./Counter";
import Card from "@material-ui/core/Card";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.wines.map(wine => (
          <Card key={wine.id} className="wineCard m-2">
            <Counter
              key={wine.id}
              onTotal={this.props.onTotal}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onChange={this.props.onChange}
              wine={wine}
            >
              <h4 className="name">{wine.name}</h4>
              <p>Size: {wine.size}</p>
              <p>Vintage: {wine.vintage}</p>
              <p>Country: {wine.country}</p>
              <p>Region: {wine.region}</p>
              <p>Varietal: {wine.varietal}</p>
              <p>Tasting Notes: {wine.notes}</p>
              <p>Case Price: ${wine.casePrice}</p>
              <img className="wineImg" src={wine.image} alt="wineImg" />
            </Counter>
          </Card>
        ))}
      </div>
    );
  }
}

export default Counters;
