import React, { Component } from 'react';
import Distribution from './Distribution'
import Chart from './Chart'
import {Link} from 'react-router-dom'
import './Game.css'

class Game extends Component {
  render() {
    const data = this.props.data
    const bg = {}
    const chartData = data['graphs'] 
    return (
      <tr className="game_background" style={bg}>
        <td> <Link to={"/games/"+data['game_id']}>{data['title']} </Link></td>
        <td> {data['viewer_count']} </td>
        <td> {data['streams_count']} </td>
        <td> {chartData ? <Chart data={chartData}/> : "Loading" } </td> 
        <td> <Distribution distribution={data['distribution']}/></td>
      </tr>
    );
  }
}

export default Game; 
