import React, { Component } from 'react';
import Header from './Header'
import Stats from './Stats'
import Navbar from './Navbar'
import './App.css';
import './Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row navbar">
            <div className="col-2 logo">
              <Header/>
            </div>
          </div>
          <div className="row navbar">
            <div className="col-12 navbar">
              <Navbar/>
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
    )
  }
}

export default App;
