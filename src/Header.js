import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
        <header id="app-header" className="app-header">
            <a href="#">
              TwitchStats 
            </a>
            <span>
              PL
            </span>
        </header>
    );
  }
}

export default Header; 
