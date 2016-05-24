angular.module('app.medications', [])
  
.controller('MedicationsCtrl', function($scope, $rootScope, $ionicModal, Drugs, $ionicPopup) {
  $scope.listCanSwipe = true
  $scope.shouldShowDelete = false;

  $scope.drugs = [
    {'name': 'Tylenol',
     'dosage': '20 mg',
     'description': 'analgesic',
     'rxnormId': '202433' },
    {'name': 'Ibuprofen',
     'dosage': '30 mg',
     'description': 'NSAID (anti-inflammatory)',
     'rxnormId': '5640' },
    {'name': 'Pepcid AC',
     'dosage': '10 mg',
     'description': 'anti-acid',
     'rxnormId': '196458' },
    {'name': 'Famotidine',
     'dosage': '15 mg',
     'description': 'anti-acid',
     'rxnormId': '4278' },
    {'name': 'Zocor',
     'dosage': '40 mg',
     'description': 'statin',
     'rxnormId': '152923' },
    {'name': 'Diflucan',
     'dosage': '50 mg',
     'description': 'anti-fungal',
     'rxnormId': '207106' }
  ];


  $scope.drug = {};

  $ionicModal.fromTemplateUrl('../../templates/addMedicationModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    })
    .then(function (modal) {
      $scope.modal = modal;
    });

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.addMedicationModal = function() {
    $scope.modal.show();
  };

  $scope.addMedication = function(drug) {
    Drugs.findRxcuiByString(drug.name).then(function(info) {
      var rxcui = info.data.idGroup.rxnormId[0];
      if (rxcui) {
        drug.rxnormId = rxcui;
      }

      $scope.drugs.push(drug);
      $scope.closeModal();
    });
  };

})