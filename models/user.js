var db = require('../config/db');

var User = db.model('User', {
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean
});

module.exports = User;
