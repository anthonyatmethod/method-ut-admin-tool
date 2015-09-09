var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
  sessionID: String,
  name: String,
  device: String,
  os: String,
  dob: { type: Date, default: Date.now },
  timestamp: { type: Date, default: Date.now },
  notes: String,
  tests: Array
});
mongoose.model('Blob', blobSchema);
