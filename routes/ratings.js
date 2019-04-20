var authMW = require('../middlewares/auth/login_required');
var updateRatingMW = require('../middlewares/ratings/update_rating');
var deleteRatingMW = require('../middlewares/ratings/delete_rating');
var currentUserMW = require('../middlewares/users/current_user');
var getMovieByIdMW = require('../middlewares/movies/get_movie_by_id');

var userModel = require('../models/user');
var movieModel = require('../models/movie');
var ratingModel = require('../models/rating');

module.exports = function(app) {
    
    var objectRepository = {
        userModel: userModel,
        ratingModel: ratingModel,
        movieModel: movieModel
    };

    /**
     * Delete the rating
     * Then redirect to the movie it belonged to
     */
    app.post('/ratings/delete',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        getMovieByIdMW(objectRepository),
        deleteRatingMW(objectRepository),
        function (req, res, next) {
            return res.redirect(`/movie/${res.tpl.movie._id}`);
        }
    );

    /**
     * Update rating or create new
     * Then redirect to the movie it belongs to
     */
    app.post('/ratings/update',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        getMovieByIdMW(objectRepository),
        updateRatingMW(objectRepository),
        function (req, res, next) {
            return res.redirect(`/movie/${res.tpl.movie._id}`);
        }
    );

}