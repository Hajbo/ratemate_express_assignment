var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads every user and put it 
 * on res.tpl.users
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};