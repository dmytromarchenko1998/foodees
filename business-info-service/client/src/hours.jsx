import React from 'react';
import $ from 'jquery'
import moment from 'moment';

class Hours extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasHours: false,
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentDay: null,
      priceRange: {1:'Under $10', 2:'$11 - 30', 3:'$31 - 60' ,4:'Above $61'},
      priceRangeVal: null,
      business_id:null
    }
  }
  
  componentDidMount(){
    this.checkRange = this.checkRange.bind(this);
    this.clockColor = this.clockColor.bind(this);
    this.showOpenOrClosed = this.showOpenOrClosed.bind(this);
    if (this.props.infors.hours !== undefined) {
      this.setState({'hasHours':true});
    } else {
      this.setState({'hasHours':false});
    }
    var date = new Date();
    var day = date.getDay();
    this.setState({
      currentDay:this.state.daysOfWeek[day - 1], 
      priceRangeVal:this.props.infors.attributes.RestaurantsPriceRange2,
      business_id:this.props.infors.business_id
    })
  }

  clockColor () {
    var day = new Date().getDay()
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    if (this.props.infors.hours !== undefined) {
      var restaurantHours = this.props.infors.hours[this.state.currentDay]; 
    } else {
      return null;
    }
    if(restaurantHours === undefined) {
      return null;
    } else {
      var hoursArr = restaurantHours.split("-");
      var openHour = hoursArr[0].split(":")[0];
      var openMin = hoursArr[0].split(":")[1];
      var closedHour = hoursArr[1].split(":")[0];

      if(hours > openHour && hours < closedHour && mins > openMin) {
        return 'green'
      } else if ((openHour === '0') && (closedHour === '0')) {
        return 'green'
      } else {
        return 'red'
      }

    }
  }

  showOpenOrClosed (str) {
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    var restaurantHours = this.props.infors.hours[str]; 

    if(restaurantHours === undefined) {
      return null;
    } else {
      var hoursArr = restaurantHours.split("-");
      var openHour = hoursArr[0].split(":")[0];
      var openMin = hoursArr[0].split(":")[1];
      var closedHour = hoursArr[1].split(":")[0];

      if(hours >= openHour && hours <= closedHour && mins >= openMin) {
        return (<b style={{color: 'green'}}>Open Now</b>)
      } else if ((closedHour === '0') && (openHour === '0')) {
        return (<b style={{color: 'green'}}>Open Now</b>)
      } else {
        return (<b style={{color: 'red'}}>Closed Now</b>)
      }

    }
  }

  convertTime (hours){
    var hoursArr = hours.split('-');
    if ((hoursArr[0] === '0:00') && (hoursArr[0] === '0:00')) {
      hours = <span className="inlineTFHours"> Open 24 hours </span>
    } else {
      hours = <span className="inlineHours" ><p>{moment(hoursArr[0], 'HH:mm').format('hh:mm a') + ' - ' + moment(hoursArr[1], 'HH:mm').format('h:mm a')}</p></span>
    }
    return hours;
  }

  checkRange (num){
    return '$'.repeat(num)
  }

  render () {
    if (this.state.hasHours) {
      return (
        <div>
           <div className="smalltable">
             <div className="isCurrentlyOpen"><i className="far fa-clock" style={{color: this.clockColor()}}></i><span style={{marginLeft: '10px'}}>Today   </span><CurrentHours convertTime={this.convertTime} showOpenOrClosed={this.showOpenOrClosed} hours={this.props.infors.hours[this.state.currentDay]}/></div>
             <p style={{borderTop: '1px solid #e6e6e6', height: '1px'}}></p>
             <p style={{marginLeft: '10px'}}><span className="money">{this.checkRange(this.state.priceRangeVal)}</span>  Price range<b style={{marginLeft: '10px'}}>{this.state.priceRange[this.state.priceRangeVal]}</b></p>
           </div>
          <h3 className="hours">Hours</h3>
          <div className="hoursTable">
            <div className="hoursTableDay">
              {this.state.daysOfWeek.map((day, i) => (<HourEntry convertTime={this.convertTime} showOpenOrClosed={this.showOpenOrClosed} dayNum ={i} key={i} day={day} hours={this.props.infors.hours[day]}/>))}
            </div>
            <div className="hoursTableTime">
              {this.state.daysOfWeek.map((day, i) => (<HourEntryTime convertTime={this.convertTime} showOpenOrClosed={this.showOpenOrClosed} dayNum ={i} key={i} day={day} hours={this.props.infors.hours[day]}/>))}
            </div>
          </div>
          <div className="editInfo">
            <i className="fas fa-pencil-alt"></i>  <a className="typeFood" href={`https://www.yelp.com/biz_attribute?biz_id=${this.state.business_id}`}>Edit business info</a>
          </div>
        </div>
      )
    } else {
      return (
      <div>
         <div className="smalltable">
           <div className="isCurrentlyOpen"><i className="far fa-clock" style={{color: this.clockColor()}}></i><span style={{marginLeft: '10px'}}>Today   </span></div>
           <p style={{borderTop: '1px solid #e6e6e6', height: '1px'}}></p>
           <p style={{marginLeft: '10px'}}><span className="money">{this.checkRange(this.state.priceRangeVal)}</span>  Price range<b style={{marginLeft: '10px'}}>{this.state.priceRange[this.state.priceRangeVal]}</b></p>
         </div>
        <h3 className="hours">Hours</h3>
        <div className="hoursTable">
        </div>
        <div className="editInfo">
          <i className="fas fa-pencil-alt"></i>  <a className="typeFood" href={`https://www.yelp.com/biz_attribute?biz_id=${this.state.business_id}`}>Edit business info</a>
        </div>
      </div>
      )
    }
  } 
}

const HourEntry = (props) => {

  var isToday = (day,str) => {
    var x = new Date().getDay()
    if (day === (x - 1)) {
      return props.showOpenOrClosed(str)
    } else {
      return null;
    }
  }

  return (
    <div className="hoursForDay">
      <span><b>{props.day}</b></span>
    </div>
  );
}

const HourEntryTime = (props) => {

  var isToday = (day,str) => {
    var x = new Date().getDay()
    if (day === (x - 1)) {
      return props.showOpenOrClosed(str)
    } else {
      return null;
    }
  }

  return (
    <div className="hoursForDayTime">
      <span className="timeForDay">{props.convertTime(props.hours) || 'Closed Today'} {isToday(props.dayNum, props.day)}</span>
    </div>
  );
}

const CurrentHours = (props) => {
  return (
    <div className="inlineHoursContainer">
      <span style={{'fontWeight':'bold'}}>{props.convertTime(props.hours)}</span>
      <span style={{marginLeft: '10px'}}>{props.showOpenOrClosed('Sunday')}</span>
    </div>
  )
}

export default Hours;