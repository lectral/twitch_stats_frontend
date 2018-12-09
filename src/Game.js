import React, { Component } from 'react';
import Distribution from './Distribution'
import Trend from './Trend'
import Chart from './Chart'
import {LineChart, Line, Tooltip, XAxis, YAxis} from 'recharts'
class Game extends Component {
  render() {
    const data = this.props.data
    const bg = {}
    const chartData = data['graphs'] 
    let chartOptions = {

     }
  const margin = { top: 0, right: 0, bottom: 0, left: 0}
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
