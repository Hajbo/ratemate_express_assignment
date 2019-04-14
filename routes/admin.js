var authMW = require('../middlewares/auth/login_required')
var adminMW = require('../middlewares/admin/admin_required')
var renderMW = require('../middlewares/utils/render');
var movieListMW = require('../middlewares/movies/get_movie_list');
var currentUserMW = require('../middlewares/users/current_user');

var userModel = require('../models/user');
var movieModel = require('../models/movie');

module.exports = function(app) {
    
    var objectRepository = {
       userModel: userModel,
       movieModel: movieModel
    };

    /**
     * Admin page
     */
    app.get('/admin',
        authMW(objectRepository),
        adminMW(objectRepository),
        currentUserMW(objectRepository),
        movieListMW(objectRepository),
        renderMW(objectRepository, 'admin')
    );
}