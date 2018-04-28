const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://database/business';
// const mongoUri = 'mongodb://localhost/businessInfo';
const db = mongoose.connect(mongoUri);

const businessSchema = new mongoose.Schema({
  business_id: String,
  name: String,
  neighborhood: String,
  address: String,
  city: String,
  state: String,
  postal_code: String,
  latitude: Number,
  longitude:Number,
  stars: Number,
  review_count: Number,
  is_open: Number,
  attributes: Object,
  categories: Array,
  hours:Object
});

const Business = mongoose.model('Business', businessSchema);

module.exports.dbHelpers = Business;
module.exports.db = db;


// const mongoose = require('mongoose');
// const db = require('./index.js');
// const data = require('./las-vegas-restaurants.js')

// const infoShema = new mongoose.Schema({
//  "business_id": String, 
//  "name": String,
//  "neighborhood": String, 
//  "address": String,
//  "city": String,
//  "state": String,
//  "latitude": Number,
//  "longitude": Number,
//  "stars": Number,
//  "review_count": Number,
//  "attributes": {
//         "RestaurantsTableService": Boolean, 
//         "GoodForMeal": {"dessert": Boolean, "latenight": Boolean, "lunch": Boolean, "dinner": Boolean, "breakfast": Boolean, "brunch": Boolean},
//         "Alcohol": String, 
//         "HasTV": Boolean, 
//         "RestaurantsGoodForGroups": Boolean, 
//         "NoiseLevel": String, 
//         "WiFi": String, 
//         "RestaurantsAttire": String, 
//         "RestaurantsReservations": Boolean,
//          "OutdoorSeating": Boolean, 
//          "BusinessAcceptsCreditCards": Boolean,
//          "RestaurantsPriceRange2": Number,
//          "BikeParking": Boolean, 
//          "RestaurantsDelivery": Boolean, 
//          "Ambience": {"romantic": Boolean, "intimate": Boolean, "classy": Boolean, "hipster": Boolean, "touristy": Boolean, "trendy": Boolean, "upscale": Boolean, "casual": Boolean},
//          "RestaurantsTakeOut": Boolean,
//          "GoodForKids": Boolean,
//          "BusinessParking": {"garage": Boolean, "street": Boolean, "validated": Boolean, "lot": Boolean, "valet": Boolean}
//        },
//  "categories": [String], 
//     "hours": {
//          "Monday": String,
//          "Tuesday": String,
//          "Friday": String, 
//          "Wednesday": String,
//          "Thursday": String,
//          "Sunday": String,
//          "Saturday": String
//       }
// });

// const Info = mongoose.model('Info', infoShema);

// module.exports.find = function(id,cb) {
//  console.log('what what ')
//  Info.findOne({"business_id" : id},function(err,data){
//   console.log('~inside find cb~')
//   console.log('err: ', err)
//   console.log('data: ', data)
//   if(err){
//    cb(err, null);
//   } else {
//    cb(null, data);
//   }

//  });
// }

// const insertInfo = function(){
//  for(let i = 0 ; i < data.length; i++) {
//   let infoEach = new Info({
//   "business_id": data[i].business_id, 
//   "name": data[i].name,
//   "neighborhood": data[i].neighborhood, 
//   "address":data[i].address,
//   "city": data[i].city,
//   "state": data[i].state,
//   "latitude": data[i].latitude,
//   "longitude": data[i].longitude,
//   "stars": data[i].stars,
//   "review_count": data[i].review_count,
//   "attributes": {
//          "RestaurantsTableService": data[i].attributes.RestaurantsTableService, 
//          "GoodForMeal": {
//             "dessert": !!data[i].attributes.GoodForMeal ? !!data[i].attributes.GoodForMeal.dessert : false,
//             "latenight": !!data[i].attributes.GoodForMeal ? !!data[i].attributes.GoodForMeal.latenight : false,
//             "lunch": !!data[i].attributes.GoodForMeal ? !!data[i].attributes.GoodForMeal.lunch : false,
//             "dinner": !!data[i].attributes.GoodForMeal ? !!data[i].attributes.GoodForMeal.dinner : false,
//             "breakfast": !!data[i].attributes.GoodForMeal ? !!data[i].attributes.GoodForMeal.breakfast : false,
//             "brunch": !!data[i].attributes.GoodForMeal ? !!data[i].attributes.GoodForMeal.brunch : false
//            },
//          "Alcohol": data[i].attributes.Alcohol, 
//          "HasTV": data[i].attributes.HasTV, 
//          "RestaurantsGoodForGroups": data[i].attributes.RestaurantsGoodForGroups, 
//          "NoiseLevel": data[i].attributes.NoiseLevel, 
//          "WiFi": data[i].attributes.WiFi, 
//          "RestaurantsAttire": data[i].attributes.RestaurantsAttire, 
//          "RestaurantsReservations": data[i].attributes.RestaurantsReservations,
//           "OutdoorSeating": data[i].attributes.OutdoorSeating, 
//           "BusinessAcceptsCreditCards": data[i].attributes.BusinessAcceptsCreditCards,
//           "RestaurantsPriceRange2": data[i].attributes.RestaurantsPriceRange2,
//           "BikeParking": data[i].attributes.BikeParking, 
//           "RestaurantsDelivery": data[i].attributes.RestaurantsDelivery, 
//           "Ambience": {
//              "romantic": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.romantic : false,
//              "intimate": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.intimate : false,
//              "classy": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.classy : false,
//              "hipster": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.hipster : false,
//              "touristy": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.touristy : false,
//              "trendy": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.trendy : false,
//              "upscale": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.upscale : false,
//              "casual": !!data[i].attributes.Ambience ? !!data[i].attributes.Ambience.casual : false
//             },
//           "RestaurantsTakeOut": data[i].attributes.RestaurantsTakeOut,
//           "GoodForKids": data[i].attributes.GoodForKids,
//           "BusinessParking": {
//              "garage": !!data[i].attributes.BusinessParking ? !!data[i].attributes.BusinessParking.garage : false,
//              "street": !!data[i].attributes.BusinessParking ? !!data[i].attributes.BusinessParking.street : false,
//              "validated": !!data[i].attributes.BusinessParking ? !!data[i].attributes.BusinessParking.validated : false,
//              "lot": !!data[i].attributes.BusinessParking ? !!data[i].attributes.BusinessParking.lot : false,
//              "valet": !!data[i].attributes.BusinessParking ? !!data[i].attributes.BusinessParking.valet : false
//           }
//         },
//   "categories": data[i].categories, 
//      "hours": {
//           "Monday": data[i].hours.Monday,
//           "Tuesday": data[i].hours.Tuesday,
//           "Friday": data[i].hours.Friday, 
//           "Wednesday": data[i].hours.Wednesday,
//           "Thursday": data[i].hours.Thursday,
//           "Sunday": data[i].hours.Sunday,
//           "Saturday": data[i].hours.Saturday
//        }

//    });

//   infoEach.save(function (err, res) {
//    if (err) {
//     console.error(`${i}: ${err}`)
//    }
//   });
//  }
// }

// // // if you want to add data from las-vegas-restaurants.js to db
// // insertInfo()

// module.exports = Info;