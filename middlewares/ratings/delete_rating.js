var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Deletes the rating object
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};