import React, { Component } from 'react';
import Game from './Game'
import Spinner from './Spinner'
import './GamesTable.css';
const URL=process.env.TWITCH_STATS_FRONTEND_BACKEND_URL
class GamesTable extends Component {

  tableItems = (data) =>{
    return <Game key={data['game_id']} data={data}/>
  }
  render() {
    return (
      <table className="games-table">
        <thead>
          <tr>
            <th> Title </th>
            <th> Viewers </th>
            <th> Streamers </th>
            <th> Graph </th>
            <th> Distribution  </th>
          </tr>
        </thead>
        <tbody>
          { this.props.data.map((item) =>this.tableItems(item))}
        </tbody>
      </table>
    );
  }
}

export default GamesTable; 
