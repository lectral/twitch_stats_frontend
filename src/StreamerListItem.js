import React, {Component} from 'react'
import './StreamerListItem.css'

class StreamerListItem extends Component {
  render(){
    return (
      <span className="streamer-list-item"> {this.props.name} </span>
    )

  }


}

export default StreamerListItem
