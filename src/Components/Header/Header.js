import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="Header-Logo" src={logo} alt="whoops"/>
      </div>
    )
  }
}

export default Header;
