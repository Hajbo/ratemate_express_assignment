var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a user if the email is available and
 * the password is long enough
 * Furthermore, the first registered user will 
 * get admin rights
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};