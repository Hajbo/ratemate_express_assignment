var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Checks user credentials
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};