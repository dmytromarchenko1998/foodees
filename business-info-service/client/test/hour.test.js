import React from 'react';
import Hours from '../src/hours.jsx';
import renderer from 'react-test-renderer';

const data ={
	"business_id": "07AZL5XenCQ_-op_onKLdw",
	"name": "BLT Steak",
	"neighborhood": "The Strip", 
	"address": "3645 Las Vegas Blvd S", 
	"city": "Las Vegas", 
	"state": "NV", 
	"postal_code": "89109", 
	"latitude": 36.113669, 
	"longitude": -115.168933, 
	"stars": 4.0, 
	"review_count": 482, 
	"is_open": 1, 
	"attributes": {
		"RestaurantsTableService": true, 
		"GoodForMeal": {
			"dessert": false, 
			"latenight": false, 
			"lunch": false, 
			"dinner": true, 
			"breakfast": false, 
			"brunch": false
		},
		"Alcohol": "full_bar", 
		"Caters": false, 
		"HasTV": true, 
		"RestaurantsGoodForGroups": true, 
		"NoiseLevel": "average", 
		"WiFi": "no", 
		"RestaurantsAttire": "casual", 
		"RestaurantsReservations": true, 
		"OutdoorSeating": false, 
		"BusinessAcceptsCreditCards": true, 
		"RestaurantsPriceRange2": 3, 
		"BikeParking": false, 
		"RestaurantsDelivery": false, 
		"Ambience": {
			"romantic": false, 
			"intimate": false, 
			"classy": false, 
			"hipster": false, 
			"divey": false, 
			"touristy": false, 
			"trendy": false, 
			"upscale": true, 
			"casual": false
		}, 
		"RestaurantsTakeOut": true, 
		"GoodForKids": false, 
		"WheelchairAccessible": true, 
		"BusinessParking": {
			"garage": true, 
			"street": false, 
			"validated": false, 
			"lot": false, 
			"valet": true
		}
	}, 
	"categories": ["Steakhouses", "American (Traditional)", "Restaurants"],
	"hours": {
		"Monday": "17:00-22:00",
		"Tuesday": "17:00-22:00", 
		"Friday": "17:00-22:30", 
		"Wednesday": "17:00-22:00", 
		"Thursday": "17:00-22:00", 
		"Sunday": "17:00-22:00", 
		"Saturday": "17:00-22:30"
	}
}

it('renders correctly', () => {
  const tree = renderer
    .create(<Hours infors={data}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('should have correct number of $', function () {
	const component = renderer.create(
		<Hours infors={data}/>
	)
	const tree = component.toTree();
	const instance = component.root
 	// expect(tree.rendered.rendered[0].rendered[2].rendered[0].rendered[0]).toBe("$$$");
 	expect(instance.findByProps({className: 'money'}).children[0]).toBe('$$$')
});




