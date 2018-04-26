import React from 'react';
import BusinessTitle from '../src/businessTitle.jsx';
import renderer from 'react-test-renderer';

const data = {
   	"business_id": "--q7kSBRb0vWC8lSkXFByA",
   	"name": "Double Play Sports Bar",
   	"neighborhood": "Southeast",
   	"address": "9495 Las Vegas Blvd S",
   	"city": "Las Vegas",
   	"state": "NV",
   	"postal_code": "89123",
   	"latitude": 36.0166929,
   	"longitude": -115.173115,
   	"stars": 4.0,
   	"review_count": 7,
   	"is_open": 0,
   	"attributes": {
	   	"GoodForMeal": {
	    	"dessert": false,
	    	"latenight": true,
	    	"lunch": false,
	    	"dinner": true,
	    	"breakfast": false,
	    	"brunch": false
	    },
	    "Alcohol": "full_bar",
	    "HasTV": true,
	    "RestaurantsGoodForGroups": true,
	    "CoatCheck": false,
	    "RestaurantsAttire": "casual",
	    "NoiseLevel": "average",
	    "OutdoorSeating": false,
	    "BusinessAcceptsCreditCards": true,
	    "RestaurantsPriceRange2": 2,
	    "Music": {
		    "dj": false,
		    "background_music": true,
		    "no_music": false,
		    "karaoke": false,
		    "live": false,
		    "video": false,
		    "jukebox": true
		},
   		"RestaurantsReservations": false,
   		"RestaurantsTableService": true,
   		"RestaurantsDelivery": false,
    	"Ambience": {
		    "romantic": false,
		    "intimate": false,
		    "classy": false,
		    "hipster": false,
		    "divey": false,
		    "touristy": false,
		    "trendy": false,
		    "upscale": false,
		    "casual": false
    	},
    	"RestaurantsTakeOut": true,
    	"GoodForKids": true,
    	"HappyHour": true,
    	"WheelchairAccessible": true,
    	"BusinessParking": {
     		"garage": false,
     		"street": false,
     		"validated": false,
     		"lot": true,
     		"valet": false
    	}
   	},
   	"categories": [
		"Sports Bars",
		"Pizza",
		"Restaurants",
		"Nightlife",
		"Bars"
   	],
   	"hours": {}
}

test('should have correct amount of $', function () {
 const tree = renderer.create(
  <BusinessTitle infors={data}/>
 ).toTree();
 expect(tree.rendered.rendered[2].rendered[0]).toBe("$$");
});


it('renders correctly', () => {
  const tree = renderer
    .create(<BusinessTitle infors={data}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});