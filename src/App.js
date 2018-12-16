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
        region: "Montalcino",
        country: "Italy",
        value: 0,
        casePrice: 180,
        vintage: 2015,
        image: "https://via.placeholder.com/200x200",
        varietal: "Sangiovese",
        notes:
          "good wine sdfsdfsdgsdfgfadgsdj kfhsjk dhfjkasdhfljhdj skfhjsdaklfhjsahfjka shdjfhsdjkfhsdjflsdhfks dhfsdjklafskfhjdskaf hsdjkhfsdjklajhfasdkfhlsdjakflhsdjka",
        total: 0
      },
      {
        id: 2,
        name: "Brunello",
        size: "750mL",
        region: "Montalcino",
        country: "Italy",
        value: 0,
        casePrice: 565,
        vintage: 2012,
        image: "https://via.placeholder.com/200x200",
        varietal: "Sangiovese",
        notes: "ok",
        total: 0
      },
      {
        id: 3,
        name: "Rose",
        size: "750mL",
        region: "Montalcino",
        country: "Italy",
        value: 0,
        casePrice: 160,
        vintage: 2017,
        image: "https://via.placeholder.com/200x200",
        varietal: "Sangiovese",
        notes: "ok",
        total: 0
      }
    ],
    totalPrice: 0,
    totalCases: 0
  };

  handleTotal = wine => {
    const wines = [...this.state.wines];
    const index = wines.indexOf(wine);
    wines[index].total = wines[index].value * wines[index].casePrice;
    this.setState({ wines });
  };

  handleCasePrice = () => {
    const wines = [...this.state.wines];
    wines[0].casePrice =
      wines[0].value <= 10 ? wines[0].casePrice : wines[0].casePrice * 0.85;
    console.log(wines[0].casePrice);
  };

  handleReset = () => {
    const wines = this.state.wines.map(wine => {
      wine.value = 0;
      wine.total = 0;
      return wine;
    });
    this.setState({ wines, totalPrice: 0 });
  };

  handleIncrement = wine => {
    const wines = [...this.state.wines];
    const index = wines.indexOf(wine);
    wines[index] = { ...wine };
    wines[index].value++;
    wines[index].total = wines[index].value * wines[index].casePrice;
    const totalPrice = wines[0].total + wines[1].total + wines[2].total;
    const totalCases = wines[0].value + wines[1].value + wines[2].value;
    wines[0].casePrice =
      wines[0].value <= 10 ? wines[0].casePrice : (wines[0].casePrice = 153);
    this.setState({ wines, totalPrice, totalCases });
  };

  handleDecrement = wine => {
    const wines = [...this.state.wines];
    const index = wines.indexOf(wine);
    wines[index] = { ...wine };
    wines[index].value--;
    wines[index].total = wines[index].value * wines[index].casePrice;
    const totalPrice = wines[0].total + wines[1].total + wines[2].total;
    const totalCases = wines[0].value + wines[1].value + wines[2].value;
    wines[0].casePrice =
      wines[0].value >= 10 ? wines[0].casePrice : (wines[0].casePrice = 180);
    this.setState({ wines, totalPrice, totalCases });
  };

  /*handleAllTotal = () => {
    const wines = [...this.state.wines];
    const totalPrice = wines[0].total + wines[1].total + wines[2].total;
    this.setState({ totalPrice });
  };*/

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar
          totalPrice={this.state.totalPrice}
          totalCases={this.state.totalCases}
          onReset={this.handleReset}
        />
        <div className="main container">
          <div className="row">
            <div className="col-md-6 col-12">
              <Counters
                wines={this.state.wines}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onTotal={this.handleTotal}
                onChange={this.handleCasePrice}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
