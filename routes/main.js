var renderMW = require('../middlewares/utils/render');

module.exports = function(app) {
    
    var objectRepository = {};

    /**
     * Main page
     * Only the menu changes for authenticated
     * users
     */
    app.use('/',
        renderMW(objectRepository, 'index')
    );
}