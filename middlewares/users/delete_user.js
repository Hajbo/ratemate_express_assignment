var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Deletes the user object
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};