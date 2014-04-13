'use strict';

angular.module('mapAppApp')
  .controller('MapCtrl', ['$scope', '$location', 'Config', 'Counties', function ($scope, $location, Config, Counties) {

    $scope.baselayers = Config.map.baselayers;
    $scope.overlaylayers = Config.map.overlaylayers;

    $scope.layers = {
        baselayers:{
            osm: $scope.baselayers.osm,
            cloudmade: $scope.baselayers.cloudmade
          },
        overlays:{}

        };




    $scope.center = Config.map.initialCenter;

    $scope.$on('centerUrlHash', function(event, centerHash) {
        $location.search({ c: centerHash });
      });

    Counties.get(function(data){
        $scope.geojson = data;
      });


  }]);
