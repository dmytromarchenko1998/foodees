const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.get('/biz/:id', (req, res) => {
  console.log('request', req.params.id)
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
