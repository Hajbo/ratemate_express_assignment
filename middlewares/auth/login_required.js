/**
 * Redirects the unauthenticated(guest) users to /
 * to protect endpoints
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof req.session === 'undefined'){
            return res.redirect('/');
        } else if  (typeof req.session.userid === 'undefined') {
            return res.redirect('/');
        }
        return next();
    };

};