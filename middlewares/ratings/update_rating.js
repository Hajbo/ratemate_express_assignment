var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a new rating if every required data
 * was sent
 * OR
 * Updates an existing rating
 * The movies/update_movie.js middleware 
 * should be called after it
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};