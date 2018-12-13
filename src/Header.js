import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-2 logo">
          <header id="app-header" className="app-header">
            <Link to="/">
              TwitchStats 
            </Link>
            <span>
              PL
            </span>
          </header>
        </div>
      </div>
    );
  }
}

export default Header; 
