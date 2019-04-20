var renderMW = require('../middlewares/utils/render');
var currentUserMW = require('../middlewares/users/current_user');

var userModel = require('../models/user');


module.exports = function(app) {
    
    var objectRepository = {
        userModel: userModel
    };

    /**
     * Main page
     * Only the menu changes for authenticated
     * users
     */
    app.use('/',
        currentUserMW(objectRepository),
        renderMW(objectRepository, 'index')
    );
}