'use strict';

angular.module('mapAppApp')
  .controller('HeaderCtrl', ['$scope', 'Counties', 'Config', function ($scope, Counties, Config) {

    $scope.title = Config.title;
    $scope.map = Config.map;
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
        $scope.locator = data;
      });
  }]);
