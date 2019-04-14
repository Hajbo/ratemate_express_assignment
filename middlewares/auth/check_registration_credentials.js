var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a user if the username is available and
 * the password is long enough
 * Furthermore, the first registered user will 
 * get admin rights
 * A failed registration attempt will not break the
 * middleware chain and render /register
 * A successful registration will redirect to /login
 */
module.exports = function (objectrepository) {

    var UserModel = requireOption(objectrepository, 'userModel');
  
    return function (req, res, next) {

        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') 
            || (typeof req.body.password === 'undefined')) {
            return next();
        }
  
        //Only the username is unique
        UserModel.findOne({username: req.body.username}, 
            function (err, result) {

                if ((err) || (result !== null)) {
                    res.tpl.error.push('Username already taken!');
                    return next();
                }

                if (req.body.password !== req.body.passwordConfirm) {
                    res.tpl.error.push('Passwords does not match!');
                    return next();
                }

                if (req.body.password.length < 6) {
                    res.tpl.error.push('The password has to be atleast 6 character long!');
                    return next();
                }

                var user = new UserModel();
                user.username = req.body.username;
                user.email = req.body.email;
                user.password = req.body.password;
                // The first user is an admin
                var isAdmin = false;
                UserModel.countDocuments( function(err, count){
                    isAdmin = count === 0;
                    user.isAdmin = isAdmin;
                    user.save(function (err) {
                        return res.redirect('/login');
                    });
                });
            }
        );
    };
};