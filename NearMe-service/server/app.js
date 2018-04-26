const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3005;
const Business = require('./db/Business.js').Business;

const cors = require('cors');

app.use(morgan('dev'));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   next();
// })
app.use(cors({'origin':'*'}));
app.get('/api/:id', (req, res) => {
  var business_id = req.url.split('/api/')[1];
  console.log(business_id);
  // var query = Business.find({business_id:'-a857YYdjzgOdOjFFRsRXQ'});
  var query = Business.find({business_id:business_id});
  query.exec((err, businesses) => {
    console.log('daaaaaawg', businesses);
    var selectedBusiness = businesses[0];
    var categoryArr = businesses[0].categories;
    for (var i =0; i < categoryArr.length; i++) {
      if (categoryArr[i] === 'Restaurants') {
        categoryArr.splice(i, 1);
        i--;
      }
    }
    var query = Business.find({categories:{$in:categoryArr}});
    query.exec((err, businesses) => {
      // console.log('digity-dawg', businesses)
      if (businesses.length > 3) {
        for (var i = 0; i < businesses.length; i++) {
          if (businesses[i].business_id === business_id) {
            businesses.splice(i, 1);
            i--;
          }
        }
      }
      // console.log(JSON.stringify(businesses));
      res.end(JSON.stringify([selectedBusiness, businesses]));
    })
  })
})

app.get('/biz/:id', (req, res) => {
  // var business_id = req.url.split('/biz/');
  // console.log(business_id);
  res.sendFile(path.join(__dirname, '../public/'))
})
app.use(express.static(path.join(__dirname, '../public/')));

module.exports = app;
