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
  column_count = 6 
  componentDidMount(){
    let url = process.env.REACT_APP_FRONTEND_BACKEND_URL+"/games/"+this.props.match.params.id
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          title : data.title,
          streamers : data.streamers,
          graphs : data.graphs
        })
      });


  }
  streamersItemRows = (streamers) => {
    return <div className="row">{streamers.map(this.streamersItem)}</div>
  }
  streamersItem = (streamer, index) => {
    return (
      <div className={"col-"+12/this.column_count}>
        <StreamerListItem 
          key={index} 
          index={index+1} 
          stat={streamer.total_viewer_count} 
          name={streamer.user_name}/>
      </div> 
    )
  }

  render(){
    let streamers = this.state.streamers.slice() 
    let chunked = []
    while(streamers.length){
      chunked.push(streamers.splice(0, this.column_count))
    }
    console.log(chunked)
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
              <h3> Streamers/Visitors in last hour </h3>
              { this.state.graphs ? <Chart data={this.state.graphs}/> : "No data" }
            </div>
          </div>
          <div className="row streamers">
            <div className="col-12">
              <h3> Streamers in last month </h3>
              { chunked ? chunked.map(this.streamersItemRows) : "" }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default GameDetails;
