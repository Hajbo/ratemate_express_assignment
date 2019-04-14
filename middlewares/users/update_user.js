var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a user if every required data was sent
 * OR
 * Updates the user object and then
 * redirect to /profile if the
 * request was sent by the owner of the :userid
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        users.push(res.tpl.user);
        req.session.user = user;
        return res.redirect('/profile');
    };
};