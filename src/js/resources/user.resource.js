(function () {
	angular
		.module('app.resources')
		.factory('UserModel', UserResource);

	/** @ngInject */
	function UserResource(DS, API_BASE_URL, DSHttpAdapter) {
		var UserModel = DS.defineResource({
      basePath: window.API_BASE,
			name: 'user',
			endpoint: 'users',
			idAttribute: 'c_id',
			relations: {},
			computed: {
				c_id: ['', function () {
					return 'me';
				}]
			},
			actions: {
				acceptNDA: {
					pathname: 'nda',
					method: 'POST'
				}
			},
			methods: {
				getStats: function () {
					var self = this,
						params = [
							window.API_BASE,
							'users', 'me',
							'stats'
						];

					return DSHttpAdapter
						.GET(params.join('/'))
						.then(function (data) {
							self.stats = data.data;
							return data.data;
						});
				},
				logout: function () {
					var self = this;

					return DSHttpAdapter
						.DELETE(window.API_HOST + '/api/users/sign_out')
						.then(function () {
							return true;
						});
				}
			}
		});

		return UserModel;
	}
}());
