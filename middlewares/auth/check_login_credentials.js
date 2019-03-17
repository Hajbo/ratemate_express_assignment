var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Checks user credentials
 * A failed login attempt will not break the
 * middleware chain and render /login
 * with an error message
 * A successful login will redirect to /profile
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};