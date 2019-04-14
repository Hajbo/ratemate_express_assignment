var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Checks user credentials
 * A failed login attempt will not break the
 * middleware chain and render /login
 * with an error message
 * A successful login will redirect to /profile
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
  
        if (typeof req.body === 'undefined'){
            return next();
        }
        
        if (typeof req.body.username === 'undefined') {
            res.tpl.error.push('Missing username!');
            return next();
        }

        if (typeof req.body.password === 'undefined') {
            res.tpl.error.push('Missing password!');
            return next();
        }

        userModel.findOne({username: req.body.username}, 
            function (err, result) {
                if ((err) || (!result)) {
                    res.tpl.error.push('Invalid credentials!');
                    return next();
                }

                if (result.password !== req.body.password) {
                    res.tpl.error.push('Invalid credentials!');
                    return next();
                }

                req.session.userid = result._id;

                //Successful login
                return res.redirect('/profile');
            }
        );
    };

};