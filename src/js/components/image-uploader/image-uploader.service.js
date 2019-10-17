/**
 * ImageUploader service
 *
 */
(function () {
	angular
		.module('components')
		.factory('ImageUploader', ImageUploader);

	var maxFileSize = 32*1024*1024;

	/** @ngInject */
	function ImageUploader ($q, $http, GapiLoader, UserService) {
		var service = {
			upload: upload
		};

		return service;

		function upload(fileData, onProgress, type) {
			var uploadDeferred = $q.defer(),
				uploadPromise = uploadDeferred.promise,
				url = '/image-upload/?name=' + fileData.name + '&type=' + type,
				xhr;

			if (fileData.size > maxFileSize) {
				uploadDeferred.reject('Files must not be larger than 32MB');
				return uploadPromise;
			}
								
      uploadDeferred.reject('Not implemented yet');

			return uploadPromise;
		}
	}
}());
