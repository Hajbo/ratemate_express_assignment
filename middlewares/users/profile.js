var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the current users' data and 
 * puts it on res.tpl.profile
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};