var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a user if the email is available and
 * the password is long enough
 * Furthermore, the first registered user will 
 * get admin rights
 * A failed registration attempt will not break the
 * middleware chain and render /register
 * A successful registration will continue the MW chain
 */
module.exports = function (objectrepository) {

    // TODO: proper checks, e.g. existing users, passwords etc.
    //  Break the MW chain if any problem occurs

    return function (req, res, next) {
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var id = users.length;
        if(id == 0) {
            var isAdmin = true;
        } else {
            var isAdmin = false;
        }

        user = {
            id: id,
            email: email,
            username: username,
            password: password,
            isAdmin: isAdmin, 
            newUser: true
        }
        
        res.locals.user = user;

        // Not every reg. request should pass...
        return next();
    };

};