import React, { Component } from 'react';
import Game from './Game'
const $ = require('jquery');
$.DataTable = require('datatables.net');
const URL=process.env.TWITCH_STATS_FRONTEND_BACKEND_URL
class GamesTable extends Component {
  state = {
    data : null
  }
  
  sortDesc = (a,b) => {
    return b['viewer_count'] - a['viewer_count']
  }

  componentDidMount() {
    let url = process.env.REACT_APP_FRONTEND_BACKEND_URL+"/games"
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data = data.sort(this.sortDesc) 
        data.splice(
          data.findIndex(
            (i) => i['streams_count'] === 0
          ))
        return data
      })
      .then(data => this.setState({data}))
  }

  tableItems = (data) =>{
    return <Game data={data}/>
  }
  render() {
    return (
          <table className="games-table">
            <thead>
              <tr>
              <th> </th>
              <th colSpan="5">Viewers </th>
              <th colSpan="5">Streamers </th>
            </tr>
            <tr>
              <th> Title </th>
              <th> Current </th> 
              <th> {"<-"} </th>
              <th> 10 min  </th>
              <th> {"<-"} </th>
              <th> 1 hour </th>
              <th> Current  </th>
              <th> {"<-"} </th>
              <th> 10 min  </th>
              <th> {"<-"} </th>
              <th> 1 hour  </th>
              <th> Distribution  </th>
            </tr>
            </thead>
            <tbody>
              { this.state.data ? this.state.data.map((item) =>this.tableItems(item)) : "" }
            </tbody>
          </table>
    );
  }
}

export default GamesTable; 
