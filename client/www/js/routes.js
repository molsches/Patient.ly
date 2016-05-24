angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('medications', {
    url: '/medications',
    templateUrl: 'templates/medications.html',
    controller: 'MedicationsCtrl'
  })

  .state('healthConditions', {
    url: '/conditions',
    templateUrl: 'templates/healthConditions.html',
    controller: 'HealthConditionsCtrl'
  })

$urlRouterProvider.otherwise('/medications')

});