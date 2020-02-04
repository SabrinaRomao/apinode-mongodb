
/* FALTOU DECLARAR ESTES DOIS  */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* FALTOU DECLARAR ESTES DOIS  */
const schema = new Schema({
  
  friend: {
    type: String,
    required: true,
    trim: true
  },
  mention: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mentions', schema);
