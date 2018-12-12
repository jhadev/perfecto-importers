import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-success btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.handleDecrement()}
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
