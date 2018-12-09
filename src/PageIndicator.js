import React, {Component} from 'react';
import './PageIndicator.css'
class PageIndicator extends Component {
  
  render() {
    let className = "page-indicator " + (this.props.selected ? "page-indicator-selected" : "")
    return (
      <span className={className} onClick={()=> this.props.onClick(this.props.number)}>
      { this.props.number }
    </span>
    )
  }


}

export default PageIndicator
