import React, { Component } from 'react';
import Header from './Header'
import GamesTable from './GamesTable'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
            </div>
          </div>
          <div className="row wide-row">
            <section id="games-table" className="games-table">
              <div className="col-12">
                <GamesTable/>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
