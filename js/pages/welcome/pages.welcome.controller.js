/**
 * pages.welcome Module
 *
 * The welcome page module.
 */
(function () {
  angular
    .module('pages')
    .controller('WelcomePageCtrl', WelcomePageCtrl);

  /** @ngInject */
  function WelcomePageCtrl($scope, $location, $window, PageService, UserService, staticFileUrlService) {
    var ctrl = this;

    PageService.updatePageData({
      title: 'Montage',
      loading: false
    });

    $scope.$on('user:signIn:complete', function() {
      $location.path('/');
    });

    ctrl.logIn = logIn;
    ctrl.isBusy = false;
		ctrl.imOnWelcomePage = true;
    ctrl.static = staticFileUrlService;

    function logIn() {
      var win = $window.open('http://localhost:3000/api/users/auth/google_oauth2?destination=/close.html', 'Montage Login'); // FIXME: Add host to config
      var timer = $window.setInterval(function() {
        if (win.closed) {
          $window.clearInterval(timer);
          $window.location.assign($window.location.href);
        }   
      }, 500);
    }
  }
}());
