import React, { Component } from 'react';
import Distribution from './Distribution'
import Chart from './Chart'
class Game extends Component {
  render() {
    const data = this.props.data
    const bg = {}
    const chartData = data['graphs'] 
    return (
      <tr className="game_background" style={bg}>
        <td> {data['title']} </td>
        <td> {data['viewer_count']} </td>
        <td> {data['streams_count']} </td>
        <td> {chartData ? <Chart data={chartData}/> : "Loading" } </td> 
        <td> <Distribution distribution={data['distribution']}/></td>
      </tr>
    );
  }
}

export default Game; 
