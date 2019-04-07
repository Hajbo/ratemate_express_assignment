var requireOption = require('../utils/object_repository_utils').requireOption;


/**
 * Loads every movie and put it 
 * on res.locals.movies
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.movies = moviedb;
        return next();
    };

};