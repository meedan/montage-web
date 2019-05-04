/**
 * gapiloader service
 *
 */
(function () {
    angular
        .module('app.services')
        .factory('UserService', UserService);

    /** @ngInject */
    function UserService($timeout, $q, $http, $rootScope, $location, UserModel, DSHttpAdapter, DialogService, PageService, ToastService) {
        var service = {
                getUser: getUser,
                signOut: signOut,
                showSettings: showSettings,
                deleteAccount: deleteAccount,
                queryUserContacts: queryUserContacts,
                getUserStats: getUserStats,
                acceptNDA: acceptNDA,
            },
            userFetchInProgress = false,
            userDeferred = null,
            userPromise = null,
            userStatsDeferred = null,
            user,
            userStats;

        return service;

        // FIXME: Return users from Check
        function queryUserContacts(query) {
            var usersQueryDeferred = $q.defer();
            usersQueryDeferred.resolve([]);
            return usersQueryDeferred.promise;
        }

        function getUser(immediate) {
            if (!user && userFetchInProgress === false) {
                userFetchInProgress = true;

                userDeferred = $q.defer();
                userPromise = userDeferred.promise;

                var gdUserDfd = $q.defer();

                $rootScope.$broadcast('user:signIn:start', user);
                $http.defaults.withCredentials = true;
                delete $http.defaults.headers.common['X-CSRFToken'];

                // Fetch Montage User
                UserModel
                    .find('me')
                    .then(function (gdUserData) {
                        gdUserDfd.resolve(gdUserData);

                        if (gdUserData.accepted_nda) {
                            user = gdUserData;
                            user.signOut = signOut;
                            user.showSettings = showSettings;
                            userDeferred.resolve(user);
                            $rootScope.$broadcast('user:signIn:complete', user);
                        } else {
                            userDeferred.reject({
                                reason: 'not_accepted_nda',
                                user: gdUserData
                            });
                            $rootScope.$broadcast('user:signIn:failed', {
                                reason: 'not_accepted_nda',
                                user: gdUserData
                            });
                        }

                        userFetchInProgress = false;
                        PageService.stopLoading();
                    }, function (response) {
                        userFetchInProgress = false;
                        userDeferred.reject('Could not login');
                        ToastService.showError('Could not login', 5000);
                        if ($location.path() !== '/welcome') {
                            $location.path('/welcome');
                        }
                    });
            }

            return userPromise;
        }

        function getUserStats(force) {
            if (!userStats || force) {
                userStatsDeferred = $q.defer();

                getUser(true)
                    .then(function (user) {
                        user.getStats()
                            .then(function (stats) {
                                userStats = stats;
                                userStatsDeferred.resolve(userStats);
                            });
                    }, function (reason) {
                        userStatsDeferred.reject(reason);
                    });
            }

            return userStatsDeferred.promise;
        }

        function signOut() {
            var revokeDeferred = $q.defer(),
                revokePromise = revokeDeferred.promise;

            var done = function (response) {
                PageService.clearDataCache();
                revokeDeferred.resolve(response);
                $rootScope.$broadcast('user:signOut:complete', user);
                user = null;
            };

            var fail = function (response) {
                revokeDeferred.reject(response);
                $rootScope.$broadcast('user:signOut:fail', user);
            };

            $rootScope.$broadcast('user:signOut:start', user);
          	DSHttpAdapter
						.DEL('http://localhost:3000/api/users/sign_out')
            .then(done, fail);

            return revokePromise;
        }

        function showSettings($event) {
            DialogService.showUserSettingsDialog($event, user);
        }

        function deleteAccount($event) {
            DialogService.confirm($event, 'Are you sure?').then(function () {
                getUser(true)
                    .then(function (user) {
                        user.DSDestroy()
                            .then(function () {
                                signOut();
                            });
                    });
            });
        }

        function acceptNDA() {
            var acceptNDADeferred = $q.defer();
            UserModel
                .acceptNDA()
                .then(function (response) {
                    UserModel
                        .find('me')
                        .then(function (gdUserData) {
                            gdUserData.accepted_nda = true;
                            acceptNDADeferred.resolve(gdUserData);
                        });
                });
            return acceptNDADeferred.promise;
        }
    }
}());

(function () {

    angular
        .module('app.services')
        .factory('HeapService', HeapService);

    /** @ngInject */
    function HeapService($rootScope, UserService) {
        return {
            engage: engage
        };

        function engage() {
            $rootScope.$on('user:signIn:complete', function () {
                UserService.getUser().then(function (user) {
                    if (window.heap) {
                        heap.identify({
                            handle: user.email
                        });
                    }
                    if (window.FS) {
                        FS.identify(user.id, {
                            displayName: user.first_name + ' ' + user.last_name,
                            email: user.email
                        });
                    }
                });
            });
        }
    }
})();
