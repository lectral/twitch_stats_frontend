import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './PageIndicator.css'
class PageIndicator extends Component {
  
  render() {
    let className = "page-indicator " + (this.props.selected ? "page-indicator-selected" : "")
    const page = this.props.number
    return (
      <Link to={"/stats/"+page} className={className} onClick={()=> this.props.onClick(this.props.number)}>
      { this.props.number }
    </Link>
    )
  }


}

export default PageIndicator
