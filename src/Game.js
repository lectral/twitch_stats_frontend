import React, { Component } from 'react';
import Distribution from './Distribution'
import Trend from './Trend'
class Game extends Component {
  render() {
    const data = this.props.data
    const bg = {}
    return (
      <tr class="game_background" style={bg}>
        <td> {data['title']} </td>
        <td> {data['viewer_count']} </td>
        <td> <Trend a={data['viewer_count']} b={data['viewers_10_min_ago']}/> </td>
        <td> {data['viewers_10_min_ago']} </td>
        <td> <Trend a={data['viewers_10_min_ago']} b={data['viewers_60_min_ago']}/> </td>
        <td> {data['viewers_60_min_ago']} </td>
        <td> {data['streams_count']}</td>
        <td> <Trend a={data['streams_count']} b={data['streams_10_min_ago']}/> </td>
        <td> {data['streams_10_min_ago']} </td>
        <td> <Trend a={data['streams_10_min_ago']} b={data['streams_60_min_ago']}/> </td>
        <td> {data['streams_60_min_ago']} </td>
        <td> <Distribution distribution={data['distribution']}/></td>
    </tr>
    );
  }
}

export default Game; 
