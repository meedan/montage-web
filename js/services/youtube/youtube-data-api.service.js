/**
 * YouTube Data Service.
 *
 * A convenient service for accessing the YouTube Data API (v3).
 */
(function () {
	angular
		.module('app.services')
		.factory('YouTubeDataService', YouTubeDataService);

	/** @ngInject */
	function YouTubeDataService ($q, $window, GapiLoader, oAuthParams) {
		var gapi,
			service = {
				request: request
			};

		return service;

		function request(endpoint, method, requestParams) {
			var dfd = $q.defer();

			GapiLoader.load().then(function(winGapi) {
        gapi = winGapi;
        gapi.client.init({
          'apiKey': window.YOUTUBE_API_DEVELOPER_KEY,
        }).then(function() {
				  gapi.client.load('youtube', 'v3').then(function() {
				    var request = gapi.client.youtube[endpoint][method](requestParams);
				    request.execute(function (response) {
				    	if (response.code === 401) {
				    		dfd.reject(response);
				    	} else {
				    		dfd.resolve(response);
				    	}
				    });
          });
			  });
      });

			return dfd.promise;
		}
	}
}());
