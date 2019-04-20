var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Deletes the rating object
 */
module.exports = function (objectrepository) {

    var ratingModel = requireOption(objectrepository, 'ratingModel');

    return function (req, res, next) {
        if ( (typeof req.body === 'undefined') || (typeof req.body.movieid === 'undefined') ){
            return next();
        }

        ratingModel.findOneAndDelete({movie: req.body.movieid}, 
            function (err, result) {
                if (err) {
                    return next(err);
                }
                return next();
            }
        );
    };

};