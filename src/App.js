import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
//import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Counters />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
