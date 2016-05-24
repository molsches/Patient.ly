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
});

