const express = require('express')
const bodyParser = require('body-parser')
const dbHelpers = require('../database/info').dbHelpers
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.static(path.join(__dirname,'../client/dist')));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors({'origin':'*'}));

app.get('/info' ,function(req,res){
  console.log('dbHelpers: ', dbHelpers)
  var business_id = req.query.business_id;
  console.log(business_id);
  dbHelpers.find( {business_id: business_id}, function(err,data){
    if(err){
      res.status(404).send("not found");
    } else {
      res.status(200).send(data);
    }
  })
})
app.get('/biz/:id', (req, res) => {
  // var business_id = req.url.split('/biz/');
  // console.log(business_id);
  res.sendFile(path.join(__dirname,'../client/dist/index.html'))
})

app.listen('3002', function () {
  console.log('listening on port 3002')
})
