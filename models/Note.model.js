const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
student: {
  ref: 'Student',
  type: mongoose.SchemaTypes.ObjectId
},
text: String
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;