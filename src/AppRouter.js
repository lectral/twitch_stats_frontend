import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './simple-grid/simple-grid.min.css'

import Stats from './Stats'
import App from './App'
import Header from './Header'
import Navbar from './Navbar'
import Games from './Games'
import GameDetails from './GameDetails'
import ComingSoon from './ComingSoon'

import './App.css';


class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="container-wide">
          <Header/>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Stats}/>
            <Route path="/stats/:page" component={Stats}/>
          </Switch>
          <Route path="/games" exact component={Games}/>
          <Route path="/games/:id" component={GameDetails}/>
          <Route path="/coming_soon" component={ComingSoon}/>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
