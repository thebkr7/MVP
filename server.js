var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// var router = express.Router();


var mongoose = require('mongoose');
var NoteSchema = require('./db').NoteSchema;
//**TODO: create own database**

app.use(express.static(__dirname + '/client'));
// app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// app.use(methodOverride());


//GET
app.get('/note', function(req, res) {   //note
  NoteSchema.find(function(error, data) {
    if (error) {
      console.log('ERROR line 26 GET = ', error);
    } else {
      console.log('Success: GET from DB data') //, data[0].text
      // res.send(data); //should it be .send?
      res.send(data);
    }
  });
});



//POST
app.post('/note', function(req, res) {
  //get text from input field of client side: answer: body.text
  //send data to mongo as Note schema
  //check if it has been sent
  addNoteDB(req.body.text);
  // console.log('hitting line 52 POST server', req.body.text)
  res.status(200).end();
})

var addNoteDB = function(noteText) {
  var newNote = new NoteSchema({ text: noteText });

  newNote.save(function(error, noteText) {
    if (error) {
      return console.log('ERROR line 50 server =', error)
    }
    // console.log('new note has been added to DB = ', noteText)
  });
}


var port = 8080;
app.listen(port);
console.log("App listening on port " + port);