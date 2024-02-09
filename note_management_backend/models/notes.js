// title
//  username
// content

const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
});

// model has two properties collection name and schema.
const NotesModel = mongoose.model('notes', NotesSchema);

module.exports = NotesModel;
