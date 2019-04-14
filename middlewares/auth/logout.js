var requireOption = require('../utils/object_repository_utils').requireOption;

/**
 * Logs out the user
 * Redirects to /
 */
module.exports = function (objectrepository) {

	return function (req, res, next) {
		req.session.destroy(function (err) {
			return next();
		});
	};

  };
