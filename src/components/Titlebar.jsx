import React, { Component } from "react";

class Titlebar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light sticky bg-dark">
        <span className="company navbar-brand mb-0 h1 text-light">
          Perfecto Importers{" "}
        </span>
      </nav>
    );
  }
}

export default Titlebar;
