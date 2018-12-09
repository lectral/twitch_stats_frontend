import React, {Component} from 'react'; 
import GamesTable from './GamesTable'
import Spinner from './Spinner'
import PageIndicator from './PageIndicator'

class Stats extends Component {
  state = {
    data : null,
    pages: [],
    current_page: 1 
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

        let pages_count = Math.ceil(data.length / 20)
        let pages = Array.from(Array(pages_count).keys())
        pages.splice(0, 1)
        pages[pages.length] = pages_count
        return {
          data : data,
          pages: pages
        }
      })
      .then(data => this.setState(
        {
          data  : data.data,
          pages : data.pages 
        }))
  }

  sortDesc = (a,b) => {
    return b['viewer_count'] - a['viewer_count']
  }

  pagesItems = (page, current_page) => {
    const is_selected = current_page === page ? true : false
    return <PageIndicator key={page} number={page} selected={is_selected} onClick={this.onClick}/>
  }
  
  onClick = (number) => {
    this.setState({
      current_page: number
    }
    )
  }

  render() {
    let data = this.state.data 
    if(data) {
      let begin = (this.state.current_page - 1)*20
      let end = begin + 20 
      data = data.slice(begin,end)
    }
    return (
      <div>
      <div className="row">
        { this.state.pages.map((value) => this.pagesItems(value,this.state.current_page)) }
      </div>
      <div>
        { data ? <GamesTable data={data}/> : <Spinner/>}
      </div>
    </div>
    )

  }
}

export default Stats;
