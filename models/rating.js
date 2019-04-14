var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Rating = db.model('Rating', {
  score: Number,
  comment: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'Movie'
  }
});

module.exports = Rating;
