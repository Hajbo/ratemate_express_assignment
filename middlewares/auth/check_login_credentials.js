/**
 * Checks user credentials
 */

 var requireOption = require('../object_repository_utils').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};