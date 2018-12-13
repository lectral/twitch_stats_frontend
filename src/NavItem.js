import React, {Component} from 'react'
import './NavItem.css'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";

class NavItem extends Component {
  render() {
    let links_matches = [this.props.location.pathname].concat(this.props.alternative)
    let className = "nav-block";
    if(links_matches.includes(this.props.link)){
      className = className+" nav-block-selected"
    }
    return (
      <div className={className}>
        <Link to={this.props.link}> {this.props.text} </Link>
      </div>
    )

  }

}

export default withRouter(NavItem);

