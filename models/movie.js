var db = require('../config/db');

var Movie = db.model('Movie', {
  title: String,
  description: String
});

module.exports = Movie;
