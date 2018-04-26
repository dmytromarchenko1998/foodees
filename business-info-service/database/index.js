const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/businessInfo';

const db = mongoose.connect(mongoUri);

module.exports = db;