var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the rating given by the given user
 * for the given movie and put it on
 * res.tpl.rating
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};