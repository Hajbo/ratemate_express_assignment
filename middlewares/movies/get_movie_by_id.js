var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the movie with the given id
 * and put it on res.tpl.movie
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};