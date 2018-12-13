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
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.wine)}
          className="btn btn-success btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.wine)}
          className="btn btn-danger btn-sm text-center"
        >
          -
        </button>
        <button
          onClick={() => this.props.onChange(this.props.id)}
          className="btn btn-primary btn-sm text-center ml-2"
        >
          total
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
