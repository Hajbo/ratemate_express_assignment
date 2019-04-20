var requireOption = require('../utils/object_repository_utils').requireOption;


/**
 * Loads every movie and put it 
 * on res.tpl.movies
 */
module.exports = function (objectrepository) {
    
    var movieModel = requireOption(objectrepository, 'movieModel');

    return function (req, res, next) {movieModel.find({}, 
        function (err, result) {
            if (err) {
                return next(err);
            }
            res.tpl.movies = result;
            return next();
        });
    };

};