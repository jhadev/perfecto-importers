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
              className="counter"
              key={wine.id}
              onTotal={this.props.onTotal}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onChange={this.props.onChange}
              wine={wine}
            >
              <h4 className="name">{wine.name}</h4>
              <p>
                <b>Tasting Notes:</b> {wine.notes}
              </p>
              <div className="row">
                <div className="col-md-4 col-12">
                  <p>
                    <b>Size:</b> {wine.size}
                  </p>
                  <p>
                    <b>Vintage:</b> {wine.vintage}
                  </p>
                  <p>
                    <b>Country:</b> {wine.country}
                  </p>
                  <p>
                    <b>Region:</b> {wine.region}
                  </p>
                  <p>
                    <b>Varietal:</b> {wine.varietal}
                  </p>
                  <p>
                    <b>Case Price:</b> ${wine.casePrice}
                  </p>
                </div>
                <div className="col-md-8 col-12">
                  <img className="wineImg" src={wine.image} alt="wineImg" />
                </div>
              </div>
            </Counter>
          </Card>
        ))}
      </div>
    );
  }
}

export default Counters;
