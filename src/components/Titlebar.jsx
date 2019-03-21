import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Titlebar extends Component {
  render() {
    return (
      <nav style={{ height: '8vh' }} className="navbar navbar-light sticky-nav bg-dark">
        <span className="company navbar-brand mb-0 h1 text-light">
          <Link to="/">Perfecto Importers </Link>
        </span>
        <li className="ml-auto nav-item company text-light">
          <Link to="/winecart">Shop</Link>
        </li>
      </nav>
    );
  }
}

export default Titlebar;
