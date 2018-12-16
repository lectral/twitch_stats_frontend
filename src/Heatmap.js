import React, {Component} from 'react';
import Moment from 'moment';
import 'moment/locale/pl'
import 'moment-timezone';
import './Heatmap.css'

class Heatmap extends Component {
  DAYS = ["Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob.", "Niedz."]
  getNumberOfDaysBetweenDates(begin, end) {
    begin = Moment(begin)
    end = Moment(end)
    return end.diff(begin, 'days') 
  }
  
  getArrayOfDaysBetweenDates(begin, end){
    let start = Moment(begin)
    const stop = Moment(end)
    let dates = []
    let index = 0
    dates[index] = []
    let last_week = start.week()

    while(start.isSameOrBefore(stop)){
      if(last_week !== start.week()){
        index++
        dates[index] = []  
        last_week = start.week()
      }
      dates[index].push(start.format('DD')) 
      start.add(1, 'days')
    }

    console.log(dates)
    return dates
  }

  gridDays = (day_name) => {
    return (
      <div className="heatmap-day"> {day_name} </div>
    )

  }

  gridRows = (week) =>{
    return (
    <div className="heatmap-row">
      { week.map(this.gridCells) }
    </div>
    )
  }

  gridCells = (day) => {
    const style = {backgroundColor: "#23d231" }
    return (
      <div className="heatmap-cell" style={style}>{day}</div>

    )
  }
  render(){
    const arr = this.getArrayOfDaysBetweenDates('2018-11-20','2018-12-15')
    const weekday_start = Moment(arr[0]).format('ddddd');
    return (
      <div>
        <div className=".heatmap-row">
          {this.DAYS.map(this.gridDays)}
        </div>
       {arr.map(this.gridRows)} 
      </div>
    )
  }


}

export default Heatmap;
