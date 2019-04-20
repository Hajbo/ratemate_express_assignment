var authMW = require('../middlewares/auth/login_required');
var adminMW = require('../middlewares/admin/admin_required');
var updateMovieMW = require('../middlewares/movies/update_movie');
var deleteMovieMW = require('../middlewares/movies/delete_movie');
var renderMW = require('../middlewares/utils/render');
var movieByIdMW = require('../middlewares/movies/get_movie_by_id');
var movieListMW = require('../middlewares/movies/get_movie_list');
var getRatingsMW = require('../middlewares/ratings/get_ratings_for_movie');
var currentUserMW = require('../middlewares/users/current_user');

var userModel = require('../models/user');
var movieModel = require('../models/movie');

module.exports = function(app) {
    
    var objectRepository = {
        userModel: userModel,
        movieModel: movieModel
    };

    /**
     * Movies page
     */
    app.get('/movies',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        movieListMW(objectRepository),
        renderMW(objectRepository, 'movies')
    );

    /**
     * New movie
     * Only for logged in admins
     */
    app.post('/movies/new',
        authMW(objectRepository),
        adminMW(objectRepository),
        currentUserMW(objectRepository),
        updateMovieMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/admin');
        }
    );

    /**
     * Delete movie
     * Only for logged in admins
     * Body contains the movieid
     */
    app.post('/movies/delete',
        authMW(objectRepository),
        adminMW(objectRepository),
        currentUserMW(objectRepository),
        deleteMovieMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/admin');
        }
    );

    /**
     * Movie by id with all the ratings
     */
    app.get('/movie/:movieid',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        movieByIdMW(objectRepository),
        getRatingsMW(objectRepository),
        renderMW(objectRepository, 'movie')
    );
}