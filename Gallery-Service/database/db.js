const mongoose = require('mongoose');
const mongoUri = 'mongodb://database/yelp';

const db = mongoose.connect(mongoUri);

const photoSchema = new mongoose.Schema({
  caption: String,
  photo_id: String,
  business_id: String,
  label: String,
  helpful: Number
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports.db = db;
module.exports.photoModel = Photo;

