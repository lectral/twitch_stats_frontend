import React, {Component} from 'react'
import './GameDetails.css'
import Chart from './Chart'
import StreamerListItem from './StreamerListItem'
class GameDetails extends Component{
  state = {
    title : '',
    streamers : [],
    graphs : [],
  }

  componentDidMount(){
    let url = process.env.REACT_APP_FRONTEND_BACKEND_URL+"/games/"+this.props.match.params.id
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          title : data.title,
          streamers : data.streamers,
          graphs : data.graphs
        })
      });


  }

  streamersItem = (streamer, index) => {
    return <StreamerListItem key={index} index={index+1} stat={streamer.total_viewer_count} name={streamer.user_name}/>
  }

  render(){
    console.log(this.state.title)
    return(
      <div className="game-details2">
        <div className="container-details">
          <div className="row">
            <div className="col-12">
              <h2> {this.state.title} </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">

              <Chart data={this.state.graphs}/>
            </div>
          </div>
          <div className="streamers">
            <div className="col-12">
              <h3> Streamers in last month </h3>
              {this.state.streamers.map(this.streamersItem)}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default GameDetails;
