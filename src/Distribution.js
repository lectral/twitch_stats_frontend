import React, {Component} from 'react';


class Distribution extends Component{
  twitchLink = (name) => {
    return "https://twitch.tv/"+name
  }
  parseDistribution = (string,rank) =>{
    let regex = /(.*)\[(.*)\]/g;
    let regex_result = regex.exec(string) 
    let value = regex_result[2]
    let name = regex_result[1]
    return <a href={this.twitchLink(name)} className={rank}> {Math.round(value)} </a>
  }
  render() {
    let string = this.props.distribution.split("|")
    return (
      <span>
        {this.parseDistribution(string[0],"badge badge-gold")}
        {string[1] ? this.parseDistribution(string[1],"badge badge-silver") : ""}
        {string[2] ? this.parseDistribution(string[2],"badge badge-bronze") : ""}

      </span>
    )

  }


}


export default Distribution;
