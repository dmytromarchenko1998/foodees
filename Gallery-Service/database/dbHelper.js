const db = require('./db.js')

var insertPhotos= function(criteria, cb) {
	var entry = new db.photoModel(criteria);
	entry.save(function(err,entry) {
		if(err) {
			cb(err, null)
		} else {
			cb(null, entry)
		}
	})
}

var getPhotos = function(criteria, cb) {
	db.photoModel.find(criteria).limit(6).exec(function(err, res) {
		if(err) {
			cb(err,null)
		} else {
			cb(null,res)
		}
	})
}

var getAllPhotos = function(criteria, cb) {
	db.photoModel.find(criteria).limit(0).exec(function(err, res) {
		if(err) {
			cb(err,null)
		} else {
			cb(null,res)
		}
	})
}

var countPhotos = function(criteria, cb) {
	db.photoModel.count(criteria).exec(function(err, res) {
		if(err) {
			cb(err,null)
		} else {
			cb(null,res)
		}
	})
}


var incrementCount = function(criteria, cb) {
	db.photoModel.findOneAndUpdate({photo_id: criteria}, {$inc: {helpful:1}}, function(err, res) {
		if(err) {
			cb(err, null)
		} else {
			cb(null, res)
		}
	})
}

var decrementCount = function(criteria, cb) {
	db.photoModel.findOneAndUpdate({photo_id: criteria}, {$inc: {helpful:-1}}, function(err, res) {
		if(err) {
			cb(err, null)
		} else {
			cb(null, res)
		}
	})
}



// insertPhotos({'caption': '', 'photo_id': 'gdhjfchfkv', 'business_id': '', 'label': '', 'helpful': 0}, function(err, res) {
// 	if(err) return err
// 		console.log(res)
// })




module.exports.getPhotos = getPhotos;
module.exports.getAllPhotos = getAllPhotos;
module.exports.countPhotos = countPhotos;
module.exports.incrementCount = incrementCount;
module.exports.decrementCount = decrementCount;
module.exports.insertPhotos = insertPhotos;
