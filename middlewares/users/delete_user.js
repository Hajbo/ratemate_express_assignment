var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Deletes the user object if the request
 * was sent by the owner of the :userid
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};