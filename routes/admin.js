var authMW = require('../middlewares/auth/login_required')
var adminMW = require('../middlewares/admin/admin_required')
var renderMW = require('../middlewares/utils/render');
var movieListMW = require('../middlewares/movies/get_movie_list');

var userModel = require('../models/user');

module.exports = function(app) {
    
    var objectRepository = {
       userModel: userModel
    };

    /**
     * Admin page
     */
    app.get('/admin',
        authMW(objectRepository),
        adminMW(objectRepository),
        movieListMW(objectRepository),
        renderMW(objectRepository, 'admin')
    );
}