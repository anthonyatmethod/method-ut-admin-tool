var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
  name: String,
  device: String,
  os: String,
  dob: { type: Date, default: Date.now },
  timestamp: { type: Date, default: Date.now },
  notes: String
});
mongoose.model('Blob', blobSchema);
