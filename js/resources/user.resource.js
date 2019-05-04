(function () {
	angular
		.module('app.resources')
		.factory('UserModel', UserResource);

	/** @ngInject */
	function UserResource(DS, API_BASE_URL, DSHttpAdapter) {
		var UserModel = DS.defineResource({
      basePath: 'http://localhost:3000/_ah/api/greenday/v1', // FIXME: Add host to config
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
							'http://localhost:3000/_ah/api/greenday/v1', // FIXME: Add host to config
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
						.DELETE('http://localhost:3000/api/users/sign_out') // FIXME: Add host to config
						.then(function () {
							return true;
						});
				}
			}
		});

		return UserModel;
	}
}());
