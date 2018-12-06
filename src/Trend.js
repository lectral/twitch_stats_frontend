import React, {Component} from 'react';


class Trend extends Component{
  render(){
    let sign
    let className
    const trend = this.props.a - this.props.b
    if(trend > 0){
      sign = "+"
      className = "trend-green"
    }else if(trend < 0){
      sign = ""
      className = "trend-red"
    }else{
      sign = ""
      className = "trend-grey"
    }
    return (
      <span className={className}>{sign}{trend}</span>
    )
  }

}

export default Trend;
