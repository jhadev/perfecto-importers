import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { value } = this.props.wine;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes +=
      this.props.wine.value || this.props.wine.total === 0
        ? "warning"
        : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <div className="row counter-row">
          <div className="col-md-3 col-12">
            <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
              ${this.props.wine.total}
            </span>
            <span
              style={{ fontSize: 14 }}
              className="badge m-1 badge-secondary"
            >
              {this.formatCount()} Cases
            </span>
            <button
              onClick={() => this.props.onIncrement(this.props.wine)}
              className="btn btn-block btn-sm btn-success"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.wine)}
              className="btn btn-danger btn-block btn-sm text-center"
              disabled={this.props.wine.value === 0 ? "disabled" : ""}
            >
              -
            </button>
          </div>
        </div>
        {/*
        <button
          onClick={() => this.props.onTotal(this.props.wine)}
          className="btn btn-primary text-center m-2"
        >
          Total
        </button>
        
  
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
