(function() {
	angular.module('app.services')
		.factory('staticFileUrlService', staticFileUrlService);

	/** @ngInject */
	function staticFileUrlService(DEBUG) {
		function getFileUrl(path) {
			if (path.charAt(0) !== '/') {
				path = '/' + path;
			}

      return path;
		}

		return {
			getFileUrl: getFileUrl
		};
	}
}());
