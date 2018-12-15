import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light sticky-nav bg-dark">
        <span className="navbar-brand mb-0 h1 text-light">
          Perfecto Importers{" "}
          <span className="badge badge-pill badge-secondary ml-6">
            Your Total: ${this.props.totalPrice}
          </span>
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm ml-2"
          >
            Reset
          </button>
        </span>
      </nav>
    );
  }
}

export default Navbar;
