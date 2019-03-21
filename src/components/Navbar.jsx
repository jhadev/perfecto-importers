import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light sticky-nav bg-dark">
        <span className="navbar-brand mb-0 h1 text-light">
          <span className="badge badge-pill badge-secondary">
            Your Total: ${this.props.totalPrice}
          </span>
          <span className="badge badge-pill badge-secondary">
            Total Cases: {this.props.totalCases}
          </span>
          <button
            onClick={this.props.onReset}
            className="btn reset badge-pill badge-secondary btn-sm"
          >
            Empty Cart
          </button>
        </span>
      </nav>
    );
  }
}

export default Navbar;
