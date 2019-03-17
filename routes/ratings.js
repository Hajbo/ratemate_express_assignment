var authMW = require('../middlewares/auth/login_required');
var updateRatingMW = require('../middlewares/ratings/update_rating');
var deleteRatingMW = require('../middlewares/ratings/delete_rating');
var updateMovieMW = require('../middlewares/movies/update_movie');

var userModel = {};
var ratingModel = {};

module.exports = function(app) {
    
    var objectRepository = {
        userModel: userModel,
        ratingModel: ratingModel
    };


    /**
     * Delete the rating
     * Then redirect to the movie it belonged to
     */
    app.post('/ratings/new',
        authMW(objectRepository),
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
        updateRatingMW(objectRepository),
        // Updating movie score
        updateMovieMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/movie/:movieid');
        }
    );

}