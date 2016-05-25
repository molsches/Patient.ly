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

  .state('tabs.doctors', {
    url: '/doctors',
    views: {
      'doctors-tab': {
        templateUrl: 'templates/doctorSearch.html',
        controller: 'DoctorSearchCtrl'
      }
    }
  })

  // .state('doctor-detail', {
  //   url: '/doctors/{doctorId}',
  //   templateUrl: 'templates/doctor-details.html',
  //   controller: function($scope, $stateParams) {
  //     console.log('$stateParams: ', $stateParams);
  //     $scope.doctor = $stateParams;
  //   }
  // })

$urlRouterProvider.otherwise('/tab/medications')

});