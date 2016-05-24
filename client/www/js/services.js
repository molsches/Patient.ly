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

.factory('Conditions', function($http) {
  var Conditions = {};

  Conditions.getAllConditions = function() {
    return $http({
      method: 'GET',
      url: 'https://api.infermedica.com/v2/conditions',
      headers: {
        'app_id': '295196e3',
        'app_key': 'bc9784b50cd2d964e8b75abdd9b4cb9d'
      }
    })
    .success(function(data) {
      console.log('successfully retrieved all conditions!');
      return data;
    })
    .error(function(err) {
      console.error('error in getting all conditions');
    });
  };

  Conditions.fluTracker = function() {
    return $http({
      method: 'GET',
      url: 'http://api.flutrack.org/results.json?s=feverANDcoughORfever?time=7',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8100'
      }
    })
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        console.error('error in getting flu tracker');
      });
  };

  return Conditions;
})

