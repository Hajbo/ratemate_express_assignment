var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a new movie if it has the data for it
 * and the user is an admin
 * OR
 * Updates the score for an existing movie
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        var newTitle = req.body.title;
        var newDescription = req.body.description;
        var newRating = req.body.rating;
        
        return next();
    };

};