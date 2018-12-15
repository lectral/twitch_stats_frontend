import React, {Component} from 'react'
import './NavItem.css'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";

class NavItem extends Component {
  render() {
    let links_matches = [this.props.location.pathname]
    let className = "nav-block";
    let matches = links_matches.filter(value => value.includes(this.props.link))
    if(matches.length > 0){
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

