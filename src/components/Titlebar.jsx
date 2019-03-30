import React, { Component } from "react";
import { Link } from "react-router-dom";

class Titlebar extends Component {
  render() {
    return (
      <nav
        style={{ height: "8vh" }}
        className="navbar navbar-light sticky-nav bg-dark"
      >
        <span className="company navbar-brand mb-0 h1 text-light">
          <Link className="company" to="/">
            Perfecto Importers{" "}
          </Link>
        </span>
        <span className="ml-auto nav-item text-light">
          <Link className="company" to="/winecart">
            Shop
          </Link>
        </span>
      </nav>
    );
  }
}

export default Titlebar;
