angular
  .module("BeMEAN", ["ngAnimate", "ngRoute", "User", "Curso", "Teacher"])
  //.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
