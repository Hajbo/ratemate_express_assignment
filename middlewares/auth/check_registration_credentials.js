var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a user if the email is available and
 * the password is long enough
 * Furthermore, the first registered user will 
 * get admin rights
 * A failed registration attempt will not break the
 * middleware chain and render /register
 * A successful registration will redirect to /login
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};