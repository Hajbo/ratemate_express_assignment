/**
 * Redirects logged in users to / so users can't
 * register while logged in or try to log in once again
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if( typeof req.session.userid !== 'undefined'){
            return res.redirect('/')
        }
        return next();
    };

};