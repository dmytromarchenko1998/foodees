import React from 'react';
import $ from 'jquery'
import moment from 'moment';

class Hours extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasHours: false,
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      currentDay: null,
      priceRange: {1:'Under $10', 2:'$11 - 30', 3:'$31 - 60' ,4:'Above $61'},
      priceRangeVal: null,
      business_id:null,
      isOpen:null
    }
  }
  
  componentDidMount(){
    this.checkRange = this.checkRange.bind(this);
    this.clockColor = this.clockColor.bind(this);
    this.showOpenOrClosed = this.showOpenOrClosed.bind(this);
    this.checkifOpen = this.checkifOpen.bind(this);
    if (this.props.infors.hours !== undefined) {
      this.setState({'hasHours':true});
    } else {
      this.setState({'hasHours':false});
    }
    var date = new Date();
    var day = date.getDay();
    this.setState({
      currentDay:this.state.daysOfWeek[day], 
      priceRangeVal:this.props.infors.attributes.RestaurantsPriceRange2,
      business_id:this.props.infors.business_id
    }, this.refreshIsOpen)
  }
  
  refreshIsOpen(){
    var context = this;
    context.checkifOpen();
    setInterval(context.checkifOpen, 5000)
  }


  checkifOpen() {
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
      var openHour = parseInt(hoursArr[0].split(":")[0]);
      var openMin = parseInt(hoursArr[0].split(":")[1]);
      var closedHour = parseInt(hoursArr[1].split(":")[0]);
      var closedMin = parseInt(hoursArr[1].split(":")[1]);
      var closedHourTF = parseInt(hoursArr[1].split(":")[0]);  
      if (closedHour < 12) {
        closedHour += 24
      }
      if (closedMin === 0) {
        closedMin += 60
      }
      console.log(mins)
      console.log(openMin)
      if (hours >= openHour && hours < closedHour && mins > openMin) {
        if ((hours + 1) === closedHour) {
          if (mins < closedMin) {
            this.setState({isOpen:true});
          } else {
            this.setState({isOpen:false});
          }
        } else {
          this.setState({isOpen:true});
        }
      } else if ((openHour === '0') && (closedHour === '0')) {
        this.setState({isOpen:true});
      } else if (closedHourTF <= openHour) {
        if (day === 0) {
          var prevRestaurantHours = this.props.infors.hours[this.state.daysOfWeek[6]];
        } else {
          var prevRestaurantHours = this.props.infors.hours[this.state.daysOfWeek[day - 1]];
        }
        var hoursArr = prevRestaurantHours.split("-");
        var closedHour = parseInt(hoursArr[1].split(":")[0]);
        var closedMin = parseInt(hoursArr[1].split(":")[1]);
        if (closedMin === 0) {
          closedMin += 60
        }
        if (hours < closedHour) {
          if ((hours + 1) === closedHour) {
            if (mins < closedMin) {
              this.setState({isOpen:true});
            } else {
              this.setState({isOpen:false});
            }
          } else {
            this.setState({isOpen:true});
          }
        } else {
          this.setState({isOpen:false});
        }
      } else {
        this.setState({isOpen:false});
      }
    }
  }

  clockColor () {
    if (this.state.isOpen === null) {
      return null;
    } else if (this.state.isOpen){
      return 'green'
    } else {
      return 'red'
    }
  }

  showOpenOrClosed (str) {

    if(this.state.isOpen === null) {
      return null;
    } else {
      if(this.state.isOpen) {
        return (<span className="closedOrOpen"><b style={{color: 'green'}}>Open Now</b></span>)
      } else {
        return (<span className="closedOrOpen"><b style={{color: 'red'}}>Closed Now</b></span>)
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
             <div className="isCurrentlyOpen"><i className="far fa-clock" style={{color: this.clockColor()}}></i><span style={{marginLeft: '10px'}}>Today   </span><CurrentHours convertTime={this.convertTime} currentDay={this.state.currentDay} showOpenOrClosed={this.showOpenOrClosed} hours={this.props.infors.hours[this.state.currentDay]}/></div>
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
    if (day === (x)) {
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
    if (day === (x)) {
      return props.showOpenOrClosed(str)
    } else {
      return null;
    }
  }

  return (
    <div className="hoursForDayTime">
      <span className="timeForDay">{props.convertTime(props.hours)} {isToday(props.dayNum, props.day)}</span>
    </div>
  );
}

const CurrentHours = (props) => {
  return (
    <div className="inlineHoursContainer">
      <span style={{'fontWeight':'bold'}}>{props.convertTime(props.hours)}</span>
      <span style={{marginLeft: '10px'}}>{props.showOpenOrClosed(props.currentDay)}</span>
    </div>
  )
}

export default Hours;