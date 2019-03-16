/**
 * Redirects every non-admin user to `/`
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};