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
        users.forEach(function(user){
            if(user.email == req.body.email){
                if(user.password == req.body.password) {
                    req.session.user = user;
                    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                    return res.redirect('/profile');
                };
            };
        })
        return next();
    };

};