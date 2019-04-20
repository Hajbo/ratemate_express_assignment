var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads the movie with the given id
 * and put it on res.tpl.movie
 */
module.exports = function (objectrepository) {
    
    var movieModel = requireOption(objectrepository, 'movieModel');

    return function (req, res, next) {

        var movieid;

        if (typeof req.params.movieid !== 'undefined') {
            movieid = req.params.movieid;
        } else if (typeof req.body.movieid !== 'undefined') {
            movieid = req.body.movieid;
        } else {
            return res.redirect('/movies');
        }

        movieModel.findOne({_id: movieid}, 
        function (err, result) {
            if ((err) || (result === null)){
                return res.redirect('/movies');
            }
            res.tpl.movie = result;
            return next();
        });
    };

};