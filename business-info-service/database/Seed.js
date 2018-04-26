const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const restaurants = require('./las-vegas-restaurants.js').data;
const db = require('./info.js').db;
const Business = require('./info.js').dbHelpers;
var query = Business.find();
var business = Business.create(restaurants)
  .then(()=> query.exec((err, businesses) => {console.log(businesses.length)}))
  .then(()=> db.disconnect())