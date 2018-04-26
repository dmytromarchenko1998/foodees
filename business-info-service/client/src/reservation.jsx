import React from 'react';
import ReservationCalendar from './ReservationCalendar.jsx'
import moment from 'moment';

class Reservation extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			showCalendar: false,
			selectedDate: new Date()
		}
		// console.log('props: ', props)
		this.toggleCalendar = this.toggleCalendar.bind(this)
		this.setSelectedDate = this.setSelectedDate.bind(this)
		this.setTimeArr = this.setTimeArr.bind(this);
	}

	toggleCalendar () {
		this.setState({
			showCalendar: !this.state.showCalendar
		})
	}

	setSelectedDate (date) {
		this.setState({
			selectedDate: date
		})
		console.log('date: ', date)
	}

	setTimeArr () {
		var day = new Date().getDay()
		var hours = new Date().getHours();
  	var mins = new Date().getMinutes();
  	var str;
  		if (day === 0) str = 'Sunday'
  		if (day === 1) str = 'Monday'
  		if (day === 2) str = 'Tuesday'
  		if (day === 3) str = 'Wednesday'
  		if (day === 4) str = 'Thursday'
  		if (day === 5) str = 'Friday'
  		if (day === 6) str = 'Saturday'
      // console.log(this.props.infors)
  		var restaurantHours = this.props.infors.hours[str]; 

  		if(restaurantHours === undefined) {
  			return null;
  		} else {
	  		var hoursArr = restaurantHours.split("-");
	  		var openHour = hoursArr[0].split(":")[0];
	  		var closedHour = hoursArr[1].split(":")[0];
	  		var timeArr = [];
	  		var timeLength = closedHour - openHour;
	  		// console.log(timeLength);
	  		if (timeLength < 0) {
	  			timeLength += 24;
	  		}
	  		var year = moment().toDate().getFullYear().toString();
	  		var holder = moment().toDate().getMonth()
	  		var month;
	  		if(holder <= 9){
					month = "0" + moment().toDate().getMonth().toString();
	  		} else {
	  			month = moment().toDate().getMonth().toString();
	  		}
	  		var day = moment().toDate().getDate().toString();
	  		var startTime = year + '-' + month + '-' + day + ' ' + hoursArr[0] + ":00";
	  		for (var i = 0; i < timeLength * 2; i++) {
	  			timeArr.push(startTime);
	  			startTime = moment(startTime).add(30, 'minutes').toDate().toString();
	  		}
	  		var arr = [];
	  		// console.log(timeArr);
	  		if(openHour <= 9){
					arr.push(timeArr[0].split(' ')[1].substr(0,4));
	  		} else {
	  			arr.push(timeArr[0].split(' ')[1].substr(0,5));
	  		}
	  		for (var i = 1; i < timeArr.length; i++) {
	  			arr.push(timeArr[i].split(' ')[4].substr(0,5))
	  		}
	  		// console.log('arr',arr);
	  		return arr;
	  	}
	}


	render() {
		return(
			<div className="smalltable col-md-5">
				<h3><i className="far fa-calendar-minus" style={{color: "black"}} ></i> Make a Reservation</h3>
				<div>
					<form className="reservationForm">
						<input className="reservationInput"readOnly onClick={this.toggleCalendar} value={moment(this.state.selectedDate).format("MMM Do YY")}/>
						{this.state.showCalendar ? (
							<ReservationCalendar func={this.setSelectedDate}/>
						) : (
							null
						)}
							<div className="selectContainer">
							<select id='res-Time' >
								{this.setTimeArr().map((item) => <option value="item" key={item}> <i className="far fa-clock"></i> {item}</option>)}
							</select>
							<select className='numberPeopleDropDown'>
							  <option value="1 person">1 person</option>
	 						  <option value="2 people">2 people</option>
							  <option value="3 people">3 people</option>
							  <option value="4 people">4 people</option>
							  <option value="5 people">5 people</option>
	 						  <option value="6 people">6 people</option>
							  <option value="7 people">7 people</option>
							  <option value="8 people">8 people</option>
							</select>
						</div>
						<div style={{width: "280px"}} className="ReservationButton" value="none" >Find a Table</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Reservation;