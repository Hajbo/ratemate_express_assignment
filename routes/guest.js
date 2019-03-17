var invAuthMW = require('../middlewares/auth/guest_required')
var renderMW = require('../middlewares/utils/render');
var logoutMW = require('../middlewares/auth/logout')
var checkRegistrationMW = require('../middlewares/auth/check_registration_credentials')
var checkLoginMW = require('../middlewares/auth/check_login_credentials')

var userModel = {};

module.exports = function(app) {
    
    var objectRepository = {
        userModel: userModel
    };

    /**
     * Login page
     */
    app.get('/login',
        invAuthMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    app.post('/login',
        invAuthMW(objectRepository),
        checkLoginMW(objectRepository),
        // The middleware chain breaks here
        // if the login was successful
        renderMW(objectRepository, 'login')
    );

    /**
     * Register page
     */
    app.get('/register',
        invAuthMW(objectRepository),
        renderMW(objectRepository, 'register')
    );

    app.post('/register',
        invAuthMW(objectRepository),
        checkRegistrationMW(objectRepository),
        // The middleware chain breaks here
        // if the registration was successful
        renderMW(objectRepository, 'register')
    );

    /**
     * Log out endpoint
     */
    app.use('/logout',
        invAuthMW(objectRepository),
        logoutMW(objectRepository)
    );
}