'use strict';

angular.module('mapAppApp')
  .controller('HeaderCtrl', ['$scope', 'Counties', function ($scope, Counties) {


    $scope.title = 'Example Angular Leaflet App';
    $scope.locator = {
        label: 'Select County',
        value: 'Harford County, MD',
        submit: function(){
            if ($scope.locator.value) {
              console.log($scope.locator.value);
            }
          }
      };
    Counties.get(function(data){
        $scope.locator.counties = data;
        console.log(data);
      });

  }]);
