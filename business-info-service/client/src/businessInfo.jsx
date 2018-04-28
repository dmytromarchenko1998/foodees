import React from 'react';

const BusinessInfo = function(props) {
	var makeTrueArr = function(obj) {
		var arr = [];
		for (var key in obj){
			if(obj[key] === true){
				arr.push (key);
			}
		}
		return arr;
	}
	var goodForMeal = makeTrueArr(props.infors.attributes.GoodForMeal);
	var ambience = makeTrueArr(props.infors.attributes.Ambience);
	var businessParking = makeTrueArr(props.infors.attributes.BusinessParking);
	var booleanToYesOrNo = function (bool) {
		return bool ? 'Yes' : 'No'
	}
	var checkYesOrNo = function(str) {
		if(str === 'no') {
			return 'No';
		} else {
			return 'Yes';
		}
	}
	var uppercaseFirst = function (str) {
		var newStr = str.substr(0,1).toUpperCase() + str.substr(1,str.length);
		return newStr;
	}

 return(
 	<div>
 		<div className="businessInfoBody">
	 		<h3 className="businessInfoHeader">More business info</h3>
	 		<p>Restaurants Table Service  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsTableService)}</b></p>
	 		<p>Good For Meal  {goodForMeal.map((item) => <b key={item}> {uppercaseFirst(item)} </b>)}</p>
	 		<p>Alcohol  <b>{booleanToYesOrNo(props.infors.attributes.Alcohol)}</b></p>
	 		<p>Restaurants Good For Groups  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsGoodForGroups)}</b></p>
	 		<p>Noise Level  <b>{uppercaseFirst(props.infors.attributes.NoiseLevel)}</b></p>
	 		<p>WiFi  <b>{checkYesOrNo(props.infors.attributes.WiFi)}</b></p>
	 		<p>Restaurants Attire  <b>{uppercaseFirst(props.infors.attributes.RestaurantsAttire)}</b></p>
	 		<p>Restaurants Reservations  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsReservations)}</b></p>
	 		<p>Outdoor Seating  <b>{booleanToYesOrNo(props.infors.attributes.OutdoorSeating)}</b></p>
	 		<p>Business Accepts Credit Cards  <b>{booleanToYesOrNo(props.infors.attributes.BusinessAcceptsCreditCards)}</b></p>
	 		<p>Bike Parking  <b>{booleanToYesOrNo(props.infors.attributes.BikeParking)}</b></p>
	 		<p>Restaurants Delivery  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsDelivery)}</b></p>
	 		<p>Ambience  {ambience.map((item) => <b key={item}>{uppercaseFirst(item)}</b>)}</p>
	 		<p>Restaurants TakeOut  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsTakeOut)}</b></p>
	 		<p>Restaurants TakeOut  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsTakeOut)}</b></p>
	 		<p>Business Parking  {businessParking.map((item) => <b key={item}>{uppercaseFirst(item)}  </b>)}</p>
 		</div>
 	</div>
 )
}

export default BusinessInfo;