var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Deletes the movie object if the user is an admin
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};