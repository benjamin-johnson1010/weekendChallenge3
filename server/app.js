var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var path = require('path');

var portDecision = listen(process.env.PORT || 3000);

app.listen(portDecision, function(req, res){
});
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});
app.post('/numberSent', urlencodedParser, function(req, res){
  console.log('numberSent hit', req.body);
  var x = req.body.x;
  var y = req.body.y;
  var answer = 0;
  if(req.body.type == "add"){
    answer = Number(x) + Number(y);
  }
  else if(req.body.type == "subtract"){
    answer = x - y;
  }
  else if(req.body.type == "multiply"){
    answer = x * y;
  }
  else {
    answer = x / y;
  }
  res.send('Answer: ' + answer);
});



app.use(express.static('public'));
