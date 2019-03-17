/**
 * Redirects the unauthenticated(guest) users to /
 * to protect endpoints
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};