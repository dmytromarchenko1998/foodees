import React from 'react';
import $ from 'jquery'
// NEED TRY TO MAKE THE REAL TIME WORK 
// MARK DOWN IT IS OPEN OR CLOSE
class Hours extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		}
		this.checkRange = this.checkRange.bind(this);
		this.todaysHours = this.todaysHours.bind(this)
		this.getClockIcon = this.getClockIcon.bind(this)
	}


	getClockIcon () {
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

  		var restaurantHours = this.props.infors.hours[str]; 

  		if(restaurantHours === undefined) {
  			return null;
  		} else {
	  		var hoursArr = restaurantHours.split("-");
	  		var openHour = hoursArr[0].split(":")[0];
	  		var openMin = hoursArr[0].split(":")[1];
	  		var closedHour = hoursArr[1].split(":")[0];

	  		if(hours > openHour && hours < closedHour && mins > openMin) {
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

	  		if(hours > openHour && hours < closedHour && mins > openMin) {
	  			return (<b style={{color: 'green'}}>Open Now</b>)
	  		} else {
	  			return (<b style={{color: 'red'}}>Closed Now</b>)
	  		}

	  	}
  	}

  	isToday (day,str) {
  		var x = new Date().getDay()
  		if (day === x) {
  			return this.showOpenOrClosed(str)
  		} else {
  			return null;
  		}
  	}

  	todaysHours () {
  		var now = new Date();
  		var day = now.getDay();
      // console.log(this.props.infors.hours.Sunday);
  		if (day === 0) return (<span><span>{`${this.props.infors.hours.Sunday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Sunday')}</span></span>);
  		if (day === 1) return (<span><span>{`${this.props.infors.hours.Monday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Monday')}</span></span>);
  		if (day === 2) return (<span><span>{`${this.props.infors.hours.Tuesday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Tuesday')}</span></span>);
  		if (day === 3) return (<span><span>{`${this.props.infors.hours.Wednesday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Wednesday')}</span></span>);
  		if (day === 4) return (<span><span>{`${this.props.infors.hours.Thursday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Thursday')}</span></span>);
  		if (day === 5) return (<span><span>{`${this.props.infors.hours.Friday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Friday')}</span></span>);
  		if (day === 6) return (<span><span>{`${this.props.infors.hours.Saturday}`}</span><span style={{marginLeft: '10px'}}>{this.showOpenOrClosed('Saturday')}</span></span>);
  	}


	checkRange (num){
		return '$'.repeat(num)
	}

	priceRange (num) {
		if(num === 1) {
			return (<span>Under $10</span>)
		}
		if(num === 2) {
			return (<span>$11 - 30</span>)
		}
		if(num === 3) {
			return (<span>$31 - 60</span>)
		}
		if(num === 4) {
			return (<span>Above $61</span>)
		}
	}


	render () {
    // console.log(this.props.infors.hours.Monday)
		return (
			<div>
			 	<div className="smalltable col-md-5">
 					<p><i className="far fa-clock" style={{color: this.getClockIcon()}}></i><span style={{marginLeft: '10px'}}>Today:</span> {this.todaysHours()}</p>
 					<p style={{borderTop: '1px solid #e6e6e6', height: '1px'}}></p>
 					<p style={{marginLeft: '10px'}}><span className="money">{this.checkRange(this.props.infors.attributes.RestaurantsPriceRange2)}</span>  Price range<b style={{marginLeft: '10px'}}>{this.priceRange(this.props.infors.attributes.RestaurantsPriceRange2)}</b></p>
 				</div>
				<h3 className="hours">Hours</h3>
				<table className="hoursTable">
				<tbody>
					<tr className="hoursForDay">
						<th><b>Mon</b></th>
						<td className="timeForDay">{this.props.infors.hours.Monday || 'Closed Today'} {this.isToday(1,'Monday')}</td>
					</tr>
					<tr className="hoursForDay">
						<th><b>Tue</b></th>
						<td className="timeForDay">{this.props.infors.hours.Tuesday || 'Closed Today'} {this.isToday(2,'Tuesday')}</td>
					</tr>
					<tr className="hoursForDay">
						<th><b>Wed</b></th>
						<td className="timeForDay">{this.props.infors.hours.Wednesday || 'Closed Today'} {this.isToday(3,'Wednesday')}</td>
					</tr>
				  <tr className="hoursForDay">
				  	<th><b>Thu</b></th>
				    <td className="timeForDay">{this.props.infors.hours.Thursday || 'Closed Today'} {this.isToday(4,'Thursday')}</td>
				  </tr>
					<tr className="hoursForDay">
						<th><b>Fri</b></th>
						<td className="timeForDay">{this.props.infors.hours.Friday || 'Closed Today'} {this.isToday(5,'Friday')}</td>
					</tr>
					<tr className="hoursForDay">
						<th><b>Sat</b></th>
						<td className="timeForDay">{this.props.infors.hours.Saturday || 'Closed Today'} {this.isToday(6,'Saturday')}</td>
					</tr>
					<tr className="hoursForDay">
						<th><b>Sun</b></th>
						<td className="timeForDay">{this.props.infors.hours.Sunday || 'Closed Today'} {this.isToday(0,'Sunday')}</td>
					</tr>
					</tbody>
				</table>
				<p className="editInfo"><i className="fas fa-pencil-alt"></i>    <a className="typeFood" href={`https://www.yelp.com/biz_attribute?biz_id=${this.props.infors.business_id}`}>Edit business info</a></p>
			</div>
		)
	}
}



	// componentDidMount () {
	// 	// var currentURL = new URL( document.location ).searchParams;
	// 	// var business_id = currentURL.get( 'business_id' )
	// 	// console.log('business_id: ', business_id)
	// 	// fetch('http://localhost:3002/info', {business_id: business_id})
	// 	// $.ajax({
	// 	// 	url: 'http://localhost:3002/info',
	// 	// 	type: 'GET',
	// 	// 	data: `business_id=${business_id}`,
	// 	// 	success: function (d) {
	// 	// 		console.log('success: ', d)
	// 	// 	},
	// 	// 	error: function (e) {
	// 	// 		console.log('error: ', e)
	// 	// 	}
	// 	// })
	// 	// $.get('http://localhost:3002/info', `business_id=${business_id}`, function (d) {
	// 	// 	console.log('success: ', d)
	// 	// })
	// }

export default Hours;