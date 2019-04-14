var db = require('../config/db');

var User = db.model('User', {
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean
});

module.exports = User;
