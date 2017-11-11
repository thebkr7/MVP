var mongoose = require('mongoose');

// var mongoDB = 'mongodb:/localhost:27017/note';
mongoose.connect('mongodb://localhost/note');
  console.log('Connected successfully to server');


//
    // var NoteSchema = mongoose.Schema;
    // var NoteModelSchema = new NoteSchema({
    //   text: String,
    //   time: Date,
    //   id: Number
    // });
    // var NoteModel = mongoose.model('NoteModel', NoteModelSchema);

var NoteSchema = mongoose.model('NoteSchema', {
  text: String,
  time: Date,
  id: Number
});

//EXAMPLE DATA:   WORKS
// var exampleNote = new NoteSchema({ text: 'helloww World' });

// exampleNote.save(function(error, notsurewhatthisis) {
//   if (error) {
//     return console.log('ERROR line 27 DB =', error)
//   }
//   console.log('LINE 30 DB, notsurewhatthisis = ', notsurewhatthisis)
// })


module.exports.NoteSchema = NoteSchema;

