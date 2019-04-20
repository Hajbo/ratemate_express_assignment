var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Creates a new movie if it has the data for it
 * and the user is an admin
 */
module.exports = function (objectrepository) {

    var MovieModel = requireOption(objectrepository, 'movieModel');
  
    return function (req, res, next) {

        if ((typeof req.body === 'undefined') || (typeof req.body.title === 'undefined')
            || (typeof req.body.description === 'undefined') ){
            return next();
        }
            
        //Only the username is unique
        MovieModel.findOne({title: req.body.title}, 
            function (err, result) {

                if ((err) || (result !== null)) {
                    res.tpl.error.push('Movie already exists!');
                    return next();
                }

                var movie = new MovieModel();
                movie.title = req.body.title;
                movie.description = req.body.description;
                
                movie.save(function (err) {
                    return next();
                });
            }
        )
    };
};