import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Games.css'

class Games extends Component{
  state = {
    games : [],
    search : null
  }

  column_count = 4 
  componentDidMount() {
    let url = process.env.REACT_APP_FRONTEND_BACKEND_URL+"/games"
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({games : json}))

  }
  gameItemsRows = (games) => {

    return <div className="row"> {games.map(this.gameItems)}</div>
  }

  gameItems = (game) => {
    console.log("aaa")
    return <div className={"col-"+12/this.column_count}><Link to={"/games/"+game.game_id}> {game.title} </Link></div>
  }

  onChange = (event) =>{
    this.setState({
      search: event.target.value
    })
  }


  render(){
    let filtered = []
    let chunked = []
    if(this.state.search){
      console.log(this.state.games)
      let search = this.state.search.toLowerCase()
      filtered = this.state.games.filter(value => value.title.toLowerCase().includes(search))
    }else{
      filtered = this.state.games.slice(); 
    }
    while(filtered.length) {
      chunked.push(filtered.splice(0,this.column_count))
    }
    return ( 
      <div className="container-games"> 
        <div className="row search">
          <div className="col-12">
          <form action="">
            <input type="search" onChange={this.onChange} className="search-box" placeholder="Search..."/>
            </form>
          </div>
          </div>
          <div>
            {chunked.map(this.gameItemsRows)} 
          </div>
        </div>
        )
        }

        }


        export default Games;


