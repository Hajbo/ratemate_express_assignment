var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a new rating if every required data
 * was sent
 * OR
 * Updates an existing rating
 * The movies/update_movie.js middleware 
 * should be called after it
 */
module.exports = function (objectrepository) {

    console.log('UPDATE RATING');

    var ratingModel = requireOption(objectrepository, 'ratingModel');
  
    return function (req, res, next) {

        console.log('Movie in update: ' +  res.tpl.movie);

        if ((typeof req.body === 'undefined') || (typeof res.tpl.movie === 'undefined')
            || (typeof req.body.score === 'undefined') ){
            return next();
        }
            
        //Only the username is unique
        ratingModel.findOne({movie: res.tpl.movie, user: res.tpl.user}, 
            function (err, result) {

                if (err) {
                    return next();
                }

                // Rating exists, update it
                if (result) {
                    var rating = result;
                    rating.score = req.body.score;
                    if (req.body.comment) {
                        rating.comment = req.body.comment;
                    }
                } else { // Create new rating
                    var rating = new ratingModel();
                    rating.score = req.body.score;
                    if (req.body.comment) {
                        rating.comment = req.body.comment;
                    }
                    rating.user = res.tpl.user._id;
                    rating.movie = res.tpl.movie._id;
                }
                
                rating.save(function (err) {
                    return next();
                });
            }
        )
    };

};