describe('Unit: Testing services', function () {
	var DialogService,
		$q,
		$timeout,
		$httpBackend,
		$mdDialog,
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

	beforeEach(inject(function (_DialogService_, _$q_, _$mdDialog_, _$timeout_, _$httpBackend_) {
		DialogService = _DialogService_;
		$q = _$q_;
		$timeout = _$timeout_;
		$mdDialog = _$mdDialog_;
		$httpBackend = _$httpBackend_;
	}));

	describe('DialogService service:', function () {

		it('should contain the DialogService', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(DialogService).not.toBe(null);
		});

		it('should return an object with confirm function', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(typeof DialogService.confirm).toBe('function');
		});

		it('should return an object with showAddCollaboratorsDialog function', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(typeof DialogService.showAddCollaboratorsDialog).toBe('function');
		});

		it('should return an object with showAddCollectionDialog function', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(typeof DialogService.showAddCollectionDialog).toBe('function');
		});

		it('should return an object with showUserSettingsDialog function', function() {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			expect(typeof DialogService.showUserSettingsDialog).toBe('function');
		});

		it('should resolve the promise when calling $mdDialog.hide()', function(done) {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			var mockDeferred = $q.defer();

			spyOn($mdDialog, 'show').and.returnValue(mockDeferred.promise);
			spyOn($mdDialog, 'hide').and.callFake(function () {
				mockDeferred.resolve();
			});

			DialogService.confirm().then(function () {
				done();
			});

			$timeout(function () {
				DialogService.hide();
			});

			$timeout.flush();
		});

		it('should reject the promise with <reason> when calling $mdDialog.cancel(reason)', function(done) {
			$httpBackend.expectGET('users/me').respond(fakeUser);
			var mockDeferred = $q.defer();

			spyOn($mdDialog, 'show').and.returnValue(mockDeferred.promise);
			spyOn($mdDialog, 'cancel').and.callFake(function () {
				mockDeferred.reject('cancel');
			});

			DialogService.confirm().then(function () {

			}, function (reason) {
				expect(reason).toBe('cancel');
				done();
			});

			$timeout(function () {
				DialogService.cancel('cancel');
			});

			$timeout.flush();
		});
	});
});
