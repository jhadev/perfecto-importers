import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { value } = this.props.wine;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.wine.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.wine)}
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.wine)}
          className="btn btn-danger text-center ml-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onChange(this.props.id)}
          className="btn btn-primary text-center m-2"
        >
          Total
        </button>
        {/* 
  
        <ul>
          {this.state.wines.map(wine => (
            <li key={wine}>{wine}</li>
          ))}
        </ul>
        */}
      </React.Fragment>
    );
  }
}

export default Counter;
