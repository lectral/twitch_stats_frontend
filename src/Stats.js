import React, {Component} from 'react'; 
import GamesTable from './GamesTable'
import Spinner from './Spinner'

class Stats extends Component {
  state = {
    data : null
  }
 
  componentDidMount() {
    let url = process.env.REACT_APP_FRONTEND_BACKEND_URL+"/games"
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

  sortDesc = (a,b) => {
    return b['viewer_count'] - a['viewer_count']
  }


  render() {
    let data = this.state.data 
    if(data) {
      data = this.state.data.splice(0,20)
    }
    return (
      <div>
      { data ? <GamesTable data={data}/> : <Spinner/>}
    </div>
    )

  }
}

export default Stats;
