angular.module('app.doctorSearch', [])

.controller('DoctorSearchCtrl', function($scope, Doctors) {

  $scope.query = {};
  $scope.results = [];

  $scope.searchDoctors = function() {
    Doctors.searchDoctors($scope.query).then(function(results) {
      console.log('results.data from doc search', results);
      var allResults = results.data.data;
      allResults.forEach(function(doc) {
        var result = {
          title: doc.profile.first_name + ' ' + doc.profile.last_name + ', ' + doc.profile.title,
          bio: doc.profile.bio,
          image: doc.profile.image_url,
          specialty: doc.specialties[0].actor,
          phones: doc.practices[0].phones,
          location: doc.practices[0].visit_address
        };
        result.rating = doc.ratings.length !== 0 ? doc.ratings[0].rating : 'Not available';

        $scope.results.push(result);
      });
    });
  };
})