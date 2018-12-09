import React, { Component } from 'react';
import {LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer} from 'recharts'
import Moment from 'moment';
import 'moment/locale/pl'
import 'moment-timezone';

class Chart extends Component {
  mapData = (data) => {
    Moment.locale('pl');
    console.log(Moment.locale());
    data['original_date'] =data['date'];
    data['date'] = Moment.utc(data['date']).tz('Europe/Warsaw').format('LT');
    return data 

  }

  render() {
    let chartData = this.props.data.map((item) => this.mapData(item))
    const margin={top: 0,bottom: 0, right: 0, left: 5}
    return (
      <ResponsiveContainer width="90%" height={100}>
        <LineChart margin={margin}  data={chartData}> 
          <XAxis dataKey="date"/>
          <Tooltip content={<CustomTooltip/>}/>
          <Line type="monotone" dataKey="viewer_count" stroke="#840000" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="streams_count" stroke="#ffffff"/>
        </LineChart>
      </ResponsiveContainer>
    )

  }

}

class CustomTooltip extends Component {
  render() {
    let vc = 0;
    let sc = 0;
    if(this.props.payload[0] && this.props.payload[1]){
      vc = this.props.payload[0].value 
      sc = this.props.payload[1].value 
    }
    return (
    <div className="custom-tooltip">
      Date: {this.props.label} <br/>
      Viewers: {vc} <br/>
      Streamers: {sc}
    </div>
    )
  }

}
export default Chart;
