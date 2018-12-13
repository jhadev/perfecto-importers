import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
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
    totalPrice: 1000
  };

  handleTotal = () => {
    const wines = this.state.wines.map(wine => {
      return wines;
    });

    this.setState({
      totalPrice: this.state.wines.casePrice * this.state.wines.value
    });
    console.log(this.state.totalPrice);
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
    this.setState({ wines });
  };

  handleDecrement = wine => {
    const wines = [...this.state.wines];
    const index = wines.indexOf(wine);
    wines[index] = { ...wine };
    wines[index].value--;
    this.setState({ wines });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar totalPrice={this.state.totalPrice} />
        <div className="main container">
          <div className="row">
            <div className="col-md-6 col-12">
              <Counters
                wines={this.state.wines}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onChange={this.handleTotal}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
