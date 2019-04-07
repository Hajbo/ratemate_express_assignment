var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the current users' data and 
 * puts it on res.locals.profile
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.locals.profile = res.locals.user;
        return next();
    };

};