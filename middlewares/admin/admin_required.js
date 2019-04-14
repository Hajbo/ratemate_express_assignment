var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Redirects every non-admin user to `/`
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.findOne({_id: req.session.userid}, 
            function (err, result) {
                if ((err) || (!result)) {
                    return res.redirect('/');
                }
                return next();
            }
        );
    };

};