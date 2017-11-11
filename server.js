var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');
//**TODO: create own database**

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var Note = mongoose.model('Note', {
  text: String,
  time: Date,
  id: Number
});

//GET
app.get('/api/note', function(req, res) {   //note
  Note.find(function(error, data) {
    if (error) {
      console.log('ERROR line 29 GET = ', error);
    } else {
      res.send(json(data)); //should it be .send?
    }
  });
});


//POST
app.post('/api/note', function(req, res) {
  //get text from input field of client side: answer: body.text
  //send data to mongo as Note schema
  //check if it has been sent
})


app.get('*', function(req, res) {
  res.sendfile('./index.html');
});


app.listen(8080);
console.log("App listening on port 8080");