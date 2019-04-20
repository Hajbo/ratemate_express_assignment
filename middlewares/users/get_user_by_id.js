var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the user with the given id
 * and put it on res.tpl.user
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {userModel.findOne({_id: req.params.userid}, 
        function (err, result) {
            if (err) {
                return next(err);
            }
            res.tpl.user = result;
            return next();
        });
    };

};