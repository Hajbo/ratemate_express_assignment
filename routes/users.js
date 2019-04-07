var authMW = require('../middlewares/auth/login_required');
var updateUserMW = require('../middlewares/users/update_user');
var deleteUserMW = require('../middlewares/users/delete_user');
var userByIdMW = require('../middlewares/users/get_user_by_id');
var userListMW = require('../middlewares/users/get_user_list');
var currentUserMW = require('../middlewares/users/profile')
var renderMW = require('../middlewares/utils/render');


var movieListMW = require('../middlewares/movies/get_movie_list');

var userModel = {};
var movieModel = {};

module.exports = function(app) {
    
    var objectRepository = {
        userModel: userModel,
        movieModel: movieModel
    };

    /**
     * Profile page for the current :userid
     */
    app.get('/profile',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        movieListMW(objectRepository), // This should be user specific - only rated movies
        renderMW(objectRepository, 'profile')
    );

    /**
     * Delete user
     * Then redirect to /
     */
    app.post('/user/:userid/delete',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        deleteUserMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/');
        }
    );

    /**
     * Update user
     * Then redirect to /profile
     */
    app.post('/user/:userid/edit',
        authMW(objectRepository),
        currentUserMW(objectRepository),
        updateUserMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/profile');
        }
    );
}