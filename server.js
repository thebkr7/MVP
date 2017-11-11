var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var router = express.Router();


var mongoose = require('mongoose');
var NoteSchema = require('./db').NoteSchema;
//**TODO: create own database**

app.use(express.static(__dirname + '/client'));
// app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// app.use(methodOverride());


//EXAMPLE DATA.     WORKS
  // var exampleNote = new NoteSchema({ text: 'TODO: put NOTE text here to be saved' });

  // exampleNote.save(function(error, notsurewhatthisis) {
  //   if (error) {
  //     return console.log('ERROR line 27 DB =', error)
  //   }
  //   console.log('LINE 30 DB, notsurewhatthisis = ', notsurewhatthisis)
  // })


//GET
app.get('/note', function(req, res) {   //note
  Note.find(function(error, data) {
    if (error) {
      console.log('ERROR line 29 GET = ', error);
    } else {
      console.log('it WoRkEd?! :0')
      res.send(json(data)); //should it be .send?
    }
  });
});


//POST
app.post('/note', function(req, res) {
  //get text from input field of client side: answer: body.text
  //send data to mongo as Note schema
  //check if it has been sent
  console.log('hitting line 52 POST server', req.body.text)
})



var port = 8080;
app.listen(port);
console.log("App listening on port " + port);