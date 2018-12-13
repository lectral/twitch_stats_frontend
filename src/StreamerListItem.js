import React, {Component} from 'react'
import './StreamerListItem.css'

class StreamerListItem extends Component {
  render(){
    return (
      <span className="streamer-list-item"> #{this.props.index} {this.props.name} ({this.props.stat}) </span>
    )

  }


}

export default StreamerListItem
