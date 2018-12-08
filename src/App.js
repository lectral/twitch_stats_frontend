import React, { Component } from 'react';
import Header from './Header'
import GamesTable from './GamesTable'
import Stats from './Stats'
import logo from './logo.svg';
import './App.css';
import './Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row navbar">
            <div class="row">
              <div className="col-2 logo">
                <Header/>
              </div>
            </div>
            <div className="row menu">
              <div className="col-12 menu-1">
                <a href="/test"> TERAZ </a> 
                <a href="/test"> </a> 
              </div>
            </div>
          </div>
          <div className="row wide-row">
            <section id="games-table" className="games-table">
              <div className="col-12">
                <Stats/>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
