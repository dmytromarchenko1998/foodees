const photoData = require('./seedData.js')
const db = require('./db.js').db;
const Photo = require('./db.js').photoModel;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var business = Photo.create(photoData)
  .then(()=> db.disconnect())
