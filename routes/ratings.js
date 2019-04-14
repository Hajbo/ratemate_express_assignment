var authMW = require('../middlewares/auth/login_required');
var updateRatingMW = require('../middlewares/ratings/update_rating');
var deleteRatingMW = require('../middlewares/ratings/delete_rating');
var updateMovieMW = require('../middlewares/movies/update_movie');
var currentUserMW = require('../middlewares/users/current_user');

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
     * New rating
     * Then redirect to the movie it belonged to
     */
    app.post('/ratings/new',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        updateRatingMW(objectRepository),
        // Update movie score after a new rating
        updateMovieMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/movie/:movieid');
        }
    );

    /**
     * Delete the rating
     * Then redirect to the movie it belonged to
     */
    app.post('/ratings/:ratingid/delete',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        deleteRatingMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/movie/:movieid');
        }
    );

    /**
     * Update rating
     * Then redirect to the movie it belongs to
     */
    app.post('/ratings/:ratingid/edit',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        updateRatingMW(objectRepository),
        // Updating movie score
        updateMovieMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/movie/:movieid');
        }
    );

}