var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Loads every rating for the given movie
 * and puts them on res.tpl.ratings
 */
module.exports = function (objectrepository) {

    var ratingModel = requireOption(objectrepository, 'ratingModel');

    return function (req, res, next) {
        if (typeof res.tpl.movie === 'undefined') {
            res.tpl.ratings = [];
            res.tpl.rating = '';
            res.tpl.userScore = 1;
            res.tpl.userComment = '';
            return next();
        }

        // Get ratings for movie
        ratingModel.find({movie: res.tpl.movie._id},
            function(err, results) {

                if ((err) || (results === null) || (results.length === 0)) {
                    res.tpl.ratings = [];
                    res.tpl.rating = '';
                    res.tpl.userScore = 1;
                    res.tpl.userComment = '';
                    return next();
                }
                res.tpl.ratings = results;

                // Calculate average score
                var sum_score = 0;
                var ratings = res.tpl.ratings;
                ratings.forEach( function(rating){
                    sum_score += rating.score;
                })
                res.tpl.rating = sum_score/ratings.length;

                // Get user specific rating and comment - if exists
                ratings.forEach( function(rating){
                    if (rating.user === res.tpl.user._id) {
                        res.tpl.userScore = rating.score;
                        if(rating.comment) {
                            res.tpl.userComment = rating.comment;
                        } else {
                            res.tpl.userComment = '';
                        }
                        return next();
                    }

                })

                res.tpl.userScore = 1;
                res.tpl.userComment = '';
                return next();
            }
        );
    };
};