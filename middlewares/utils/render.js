/**
 * Render values into the template using the template engine
 */
module.exports = function (objectrepository, viewName) {
   
    return function (req, res) {
        res.end('Template: ' + viewName)
    };

  };