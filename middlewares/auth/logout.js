var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Logs out the user
 * Redirects to /
 */
module.exports = function (objectrepository) {
    // TODO: make it work, only works if I delete the cookie manually
    return function (req, res, next) {
        if (req.session) {
            req.session.destroy(function(err) {
                if(err) {
                    return next(err);
                } else {
                    res.clearCookie("connect.sid");
                    return res.redirect('/');
                }
                });
            }
        return res.redirect('/')
    };
};