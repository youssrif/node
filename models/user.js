const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  motdepasse: String,
  date_creation: { type: String, default: moment().format() },
}, { timestamps: true });

const User = mongoose.model('user', UserSchema);
module.exports = User;