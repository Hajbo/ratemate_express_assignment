/**
 * Redirects the unauthenticated(guest) users to /
 * to protect endpoints
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if( typeof req.session.user == 'undefined'){
            return res.redirect('/')
        }
        res.locals.user = req.session.user;
        return next();
    };

};