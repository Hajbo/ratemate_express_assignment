var authMW = require('../middlewares/auth/login_required')
var adminMW = require('../middlewares/admin/admin_required')
var renderMW = require('../middlewares/utils/render');

var userModel = {};

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
        renderMW(objectRepository, 'admin')
    );
}