import React, {Component} from 'react'
import './StreamerListItem.css'

class StreamerListItem extends Component {
  render(){
    return (
      <a href={"http://twitch.tv/"+this.props.name} className="streamer-list-item">{this.props.name} ({this.props.stat}) </a>
    )

  }


}

export default StreamerListItem
