angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/photo/:id', {
      templateUrl: 'views/detail.html',
      controller: 'DetailCtrl'
    })
    .otherwise('/');

    $authProvider.loginUrl = 'https://instagram03.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'https://instagram03.herokuapp.com/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'https://instagram03.herokuapp.com/auth/instagram',
      redirectUri: 'https://dl.dropboxusercontent.com/u/70636465/instagram/index.htm',
      clientId: '2c714e2078614248a273cecb2526cb3d',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  })

  .run(function($rootScope, $window, $auth) {
    if ($auth.isAuthenticated()) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });
