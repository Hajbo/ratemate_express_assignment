var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the user with the given id
 * and put it on res.locals.user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.locals.user = users[0];
        return next();
    };

};