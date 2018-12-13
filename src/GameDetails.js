import React, {Component} from 'react'
import './GameDetails.css'
import Chart from './Chart'
import StreamerListItem from './StreamerListItem'
class GameDetails extends Component{
  state = {
    data : {
      'title' : 'Fortnite', 
      'twitch_id' : this.props.match.params.id,
      "graphs": [
        {
          "date": "2018-12-10 19:51:04 ",
          "interval": 10,
          "viewer_count": 12529,
          "streams_count": 115
        },
        {
          "date": "2018-12-10 19:40:45 ",
          "interval": 10,
          "viewer_count": 10955,
          "streams_count": 106
        },
        {
          "date": "2018-12-10 19:30:26 ",
          "interval": 10,
          "viewer_count": 10441,
          "streams_count": 111
        },
        {
          "date": "2018-12-10 19:20:06 ",
          "interval": 10,
          "viewer_count": 10364,
          "streams_count": 123
        },
      ],
      "streamers" : [
        {"user_name" : "Zebra" },
        {"user_name" : "Real299" }
      ]
      }


    }


    streamersItem = (streamer) => {

      return <StreamerListItem name={streamer.user_name}/>
    }
    render(){
      return(
        <div className="game-details2">
        <div className="container-details">
          <h2> PLACEHOLDER </h2>
          <div className="row">
            <div className="col-12">
              <span className="title">{this.props.match.params.id}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">

              <Chart data={this.state.data.graphs}/>
            </div>
          </div>
          <div className="streamers">
            <div className="col-12">
              <h3> Streamers in last month </h3>
              {this.state.data.streamers.map(this.streamersItem)}
            </div>
          </div>
        </div>
        </div>
      )
    }

  }

  export default GameDetails;
