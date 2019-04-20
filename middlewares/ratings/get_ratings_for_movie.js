var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads every rating for the given movie
 * and puts them on res.tpl.ratings
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.tpl.ratings = [];
        return next();
    };

};