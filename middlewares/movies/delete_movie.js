var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Deletes the movie object if the user is an admin
 * and the movieid from the body is valid
 */
module.exports = function (objectrepository) {

    var movieModel = requireOption(objectrepository, 'movieModel');

    return function (req, res, next) {
        if ( (typeof req.body === 'undefined') || (typeof req.body.movieid === 'undefined') ){
            return next();
        }

        movieModel.findOneAndDelete({_id: req.body.movieid}, 
            function (err, result) {
                if (err) {
                    return next(err);
                }
                return next();
            }
        );
    };

};