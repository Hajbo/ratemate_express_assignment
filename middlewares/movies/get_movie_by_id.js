var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the movie with the given id
 * and put it on res.tpl.movie
 */
module.exports = function (objectrepository) {
    
    var movieModel = requireOption(objectrepository, 'movieModel');

    return function (req, res, next) {movieModel.findOne({_id: req.params.movieid}, 
        function (err, result) {
            if (err) {
                return next(err);
            }
            res.tpl.movie = result;
            return next();
        });
    };

};