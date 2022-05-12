const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender:{
    type: Number,
    required: true
  },
  major:{
    type: String,
    required: true
  },
  year:{
    type: Number,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  bio:{
    type: String,
    required: true
  },
  instagram:{
    type: String,
    required: true
  },
  discord:{
    type: String,
    required: true
  },
  facebook:{
    type: String,
    required: true
  },
  samegender:{
    type: Boolean,
    required: true
  },
  onthehill:{
    type: Boolean,
    required: true
  },
  alchohol:{
    type: Boolean,
    required: true
  },
  pets:{
    type: Boolean,
    required: true
  },
  nightowl:{
    type: Boolean,
    required: true
  },
});

module.exports = User = mongoose.model('user', UserSchema);