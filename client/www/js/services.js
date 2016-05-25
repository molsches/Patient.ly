angular.module('app.services', [])

.factory('Drugs', function($http) {
  var Drugs = {};

  Drugs.findRxcuiByString = function(drugName) {
    var rxcuiUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui?name=';
    return $http.get(rxcuiUrl + drugName)
      .success(function(data) {
        console.log('Rxcui successfully retrieved: ', data);
        return data;
      })
      .error(function(err) {
        console.error('Error in getting rxcui in services: ', err);
      });
  };

  return Drugs;
})

.factory('Doctors', function($http) {
  var Doctors = {};

  Doctors.searchDoctors = function(params) {
    var specialty = params.specialty;
    var location = params.location;
    var apiKey = 'e484dc3a771841e45672aac0b93c21ac';
    var doctorUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty + '&location=' + location + '&skip=0&limit=15&user_key=' + apiKey;
    
    return $http.get(doctorUrl)
      .success(function(results) {
        console.log('successfully retrieved list of doctors!');
        return results.data;
      })
      .error(function(err) {
        console.error('error in searching doctors!');
      });
  };

  return Doctors;
});

