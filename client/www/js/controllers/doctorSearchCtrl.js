angular.module('app.doctorSearch', [])

.controller('DoctorSearchCtrl', function($scope, Doctors, $ionicModal) {

  $scope.query = {};
  $scope.results = [];

  $scope.searchDoctors = function() {
    Doctors.searchDoctors($scope.query).then(function(results) {
      console.log('results.data from doc search', results);
      var allResults = results.data.data;
      allResults.forEach(function(doc) {
        var result = {
          title: doc.profile.first_name + ' ' + doc.profile.last_name + ', ' + doc.profile.title,
          doctorId: doc.npi,
          bio: doc.profile.bio,
          image: doc.profile.image_url,
          specialty: doc.specialties[0].actor,
          phones: doc.practices[0].phones[0].number,
          location: doc.practices[0].visit_address
        };
        result.rating = doc.ratings.length !== 0 ? doc.ratings[0].rating : 'Not available';
        // var loc = doc.practices[0].visit_address;
        // result.location = loc.street + ', ' + loc.street2 + 
        //   loc.city + ', ' + loc.state + ' ' + loc.zip;

        $scope.results.push(result);
      });
    });
  };

  $ionicModal.fromTemplateUrl('../../templates/doctor-details.html', {
    scope: $scope,
    animation: 'slide-in-up',
    })
    .then(function (modal) {
      $scope.modal = modal;
    });

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.doctorDetails = function(doctor) {
    $scope.doctor = doctor;
    $scope.modal.show();
  };
})