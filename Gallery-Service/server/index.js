const express = require('express');
const bodyParser = require('body-parser');
const dbHelper = require('../database/dbHelper.js');
const path = require('path');
const multer = require('multer');
var cors = require('cors');
var fs = require('fs');
const uuidv4 = require('uuid/v4');


require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));


let uploaded = multer({dest: 'upload/'})

app.post('/upload/:biz_id', uploaded.single('file'), (req, res) => {

  console.log(req)
  console.log('-----', BUCKET)
  console.log('faefwr', req.params.biz_id)
  upload(req.file, req.params.biz_id)
  //.then(url => {
  //   console.log('fegrgretgrt', url)
  //   res.json({url: url});
  // }).catch(e => {
  //   console.log(e);
  // });
  console.log('FILE', req.file)

});




app.get('/api/biz/:biz_id', function(req, res) {
  dbHelper.getPhotos({business_id: req.params.biz_id}, function(err, respond) {
  	if(err) return err
  	res.send(respond)
  })
});

app.get('/api/biz_photos/:biz_id', function(req, res) {
	if(req.query.select) {
		dbHelper.getAllPhotos({photo_id: req.query.select}, function(err, respond) {
  		if(err) return err
  		res.send(respond)
  	})
	} else if(req.query.tab){
    dbHelper.getAllPhotos({business_id: req.params.biz_id, label: req.query.tab}, function(err, respond) {
      if(err) return err
      res.send(respond)
  })
  } else if(req.query.caption){
    dbHelper.getAllPhotos({business_id: req.params.biz_id, caption: JSON.parse(req.query.caption)}, function(err, respond) {
      if(err) return err
      res.send(respond)
  })
  } else {
	  dbHelper.getAllPhotos({business_id: req.params.biz_id}, function(err, respond) {
	  	if(err) return err
	  	res.send(respond)
	  })
  }
});



app.get('/biz/*', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});



app.patch('/api/biz_photos/:photo_id/:type', function(req,res) {
  if(req.params.type === 'increase'){
  dbHelper.incrementCount(req.params.photo_id, function(err,respond) {
    if(err) return err
    res.send(respond)
  })
} else {

  dbHelper.decrementCount(req.params.photo_id, function(err,respond) {
    if(err) return err
    res.send(respond)
  })

}
});





const aws = require('aws-sdk');
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_REGION = process.env.AWS_REGION;
const BUCKET = process.env.BUCKET;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});

function upload(file, biz_id) {

  console.log(file);

  const s3 = new aws.S3();

  // const params = {
  //   Bucket: BUCKET,
  //   Key: file.filename,
  //   Expires: 60,
  //   ContentType: file.filetype
  // };

  console.log(file)

  var unique_id = uuidv4();

fs.readFile(file.path, function(err, data) {
  if(err) throw err;

   s3.putObject({Bucket: BUCKET, Key: `${unique_id}.jpg`, Body: data}, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response)

  dbHelper.insertPhotos({caption: '', photo_id: unique_id, business_id: biz_id, label: '', helpful: 0}, function(err,respond) {
    if(err) return err
    console.log('database', respond)
  })


  // return new Promise((resolve, reject) => {
  //   s3.getSignedUrl('putObject', params, (err, url) => {
  //     if (err) {
  //       reject(err);
  //     }
  //     resolve(url);
  //   });
  // });
}
)
})




}



app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

