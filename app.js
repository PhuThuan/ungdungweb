var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors())
app.use(express.json())
app.get('/',  (req, res, next)=> {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

module.exports=app;
