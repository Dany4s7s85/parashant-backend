const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  stateName: {
    type: String,
  },
  stateCode: {
    type: String,
  },
  cityName: {
    type: String,
  },
  cityCode: {
    type: String,
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;