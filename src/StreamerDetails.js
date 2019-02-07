import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './StreamerDetails.css'

class StreamerDetails extends Component {
  state = {
    user_name : '',
    games: []
  }
  componentDidMount(){ let url = process.env.REACT_APP_FRONTEND_BACKEND_URL+"/streamers/"+this.props.match.params.id
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          user_name : data.user_name,
          games : data.games
        })
      });


  }

  gamesItems = (game) => {
    return <span className="game-link"><Link to={"/games/"+game['game_id']}>{game['title']}</Link></span> 
  }
  render() {
    return (
      <div className="game-details2">
        <div className="container-details">
          <div className="row">
            <h2> {this.state.user_name} </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3> Streamed games </h3>
            { this.state.games[0] ? this.state.games.map(this.gamesItems) : "" }
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3> Schedule </h3>
            { this.state.games[0] ? this.state.games.map(this.gamesItems) : "" }
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3> Top Viewed </h3>
            { this.state.games[0] ? this.state.games.map(this.gamesItems) : "" }
          </div>
        </div>

      </div>
    )
  } 
}


export default StreamerDetails;
