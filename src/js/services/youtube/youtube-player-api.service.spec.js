describe('Unit: Testing services', function () {
	var YouTubePlayerService,
		$q,
		$timeout,
		$httpBackend,
		$window,
		GapiLoader,
		oAuthParams,
		YT = {
			ready: function(callback) {
				callback();
			},
			Player: function (container, params) {
				params.events.onReady();
				return {};
			}
		},
		gapi = {
			client: {
				load: function (apiName, apiVersion) {}
			}
		},
		fakeUser = {
			'accepted_nda': true,
			'email': 'someone@somewhere.com',
			'first_name': '',
			'gaia_id': '1234567890',
			'id': '1',
			'is_active': true,
			'is_googler': false,
			'is_staff': false,
			'is_superuser': false,
			'language': 'en',
			'last_login': '2014-09-17T10:53:42+00:00',
			'last_name': '',
			'username': '1234567890'
		};

	beforeEach(module('app'));

	beforeEach(inject(function (_YouTubePlayerService_, _$q_, _$window_, _$timeout_, _GapiLoader_, _oAuthParams_, _$httpBackend_) {
		YouTubePlayerService = _YouTubePlayerService_;
		$q = _$q_;
		$timeout = _$timeout_;
		$window = _$window_;
		GapiLoader = _GapiLoader_;
		oAuthParams = _oAuthParams_;
		$httpBackend = _$httpBackend_;
	}));


	describe('YouTubePlayerService service:', function () {

		it('should contain the YouTubePlayerService', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(YouTubePlayerService).not.toBe(null);
		});

		it('should return an object with a createVideo method', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(typeof YouTubePlayerService.createVideo).toBe('function');
			expect($window.onYouTubeIframeAPIReady()).toEqual($window.YT);
		});

		it('should load the api and create a player when calling createVideo', function(done) {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			var mockDeferred = $q.defer(),
				gapiLoaderDeferred = $q.defer();

			spyOn($window, 'onYouTubeIframeAPIReady').and.callThrough();

			YouTubePlayerService.createVideo(null, 'CAXtDPKkOlA').then(function () {
				done();
			});

			$timeout(function () {
				$window.YT = YT;
				$window.onYouTubeIframeAPIReady();
			});

			$timeout.flush();
		});
	});
});
