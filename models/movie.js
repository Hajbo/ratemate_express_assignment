var db = require('../config/db');

var Movie = db.model('Movie', {
  title: String
});

module.exports = Movie;
