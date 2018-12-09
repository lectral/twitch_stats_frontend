import React, {Component} from 'react'
import './NavItem.css'

class NavItem extends Component {
  render() {
    let className = "nav-block"
    if(this.props.selected){
      className = className+" nav-block-selected"
    }
    return (
      <div className={className}>
        <a href={this.props.link}> {this.props.text} </a> 
      </div>
    )

  }

}

export default NavItem;
