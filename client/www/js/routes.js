angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/NavBar.html"
  })

  .state('tabs.medications', {
    url: '/medications',
    views: {
      'medications-tab': {
        templateUrl: 'templates/medications.html',
        controller: 'MedicationsCtrl'
      }
    }
  })

  .state('tabs.conditions', {
    url: '/conditions',
    views: {
      'conditions-tab': {
        templateUrl: 'templates/healthConditions.html',
        controller: 'HealthConditionsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tab/medications')

});