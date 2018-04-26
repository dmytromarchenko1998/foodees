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
	 		<p>RestaurantsTableService  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsTableService)}</b></p>
	 		<p>GoodForMeal  {goodForMeal.map((item) => <b key={item}> {uppercaseFirst(item)} </b>)}</p>
	 		<p>Alcohol  <b>{booleanToYesOrNo(props.infors.attributes.Alcohol)}</b></p>
	 		<p>RestaurantsGoodForGroups  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsGoodForGroups)}</b></p>
	 		<p>NoiseLevel  <b>{uppercaseFirst(props.infors.attributes.NoiseLevel)}</b></p>
	 		<p>WiFi  <b>{checkYesOrNo(props.infors.attributes.WiFi)}</b></p>
	 		<p>RestaurantsAttire  <b>{uppercaseFirst(props.infors.attributes.RestaurantsAttire)}</b></p>
	 		<p>RestaurantsReservations  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsReservations)}</b></p>
	 		<p>OutdoorSeating  <b>{booleanToYesOrNo(props.infors.attributes.OutdoorSeating)}</b></p>
	 		<p>BusinessAcceptsCreditCards  <b>{booleanToYesOrNo(props.infors.attributes.BusinessAcceptsCreditCards)}</b></p>
	 		<p>BikeParking  <b>{booleanToYesOrNo(props.infors.attributes.BikeParking)}</b></p>
	 		<p>RestaurantsDelivery  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsDelivery)}</b></p>
	 		<p>Ambience  {ambience.map((item) => <b key={item}>{uppercaseFirst(item)}</b>)}</p>
	 		<p>RestaurantsTakeOut  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsTakeOut)}</b></p>
	 		<p>RestaurantsTakeOut  <b>{booleanToYesOrNo(props.infors.attributes.RestaurantsTakeOut)}</b></p>
	 		<p>BusinessParking  {businessParking.map((item) => <b key={item}>{uppercaseFirst(item)}  </b>)}</p>
 		</div>
 	</div>
 )
}

export default BusinessInfo;