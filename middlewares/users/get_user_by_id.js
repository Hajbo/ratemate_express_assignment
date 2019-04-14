var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the user with the given id
 * and put it on res.tpl.user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.tpl.user = users[0];
        return next();
    };

};