'use strict';

angular.module('mapAppApp')
  .controller('MapCtrl', ['$scope', '$location', 'Config', 'Counties', function ($scope, $location, Config, Counties) {

    $scope.baselayers = Config.map.baselayers;
    $scope.overlaylayers = Config.map.overlays;

    $scope.layers = {
        baselayers:{
            osm: $scope.baselayers.osm,
            cloudmade: $scope.baselayers.cloudmade
          },
        overlays:{
            buildings: $scope.overlaylayers.buildings
        }

        };

    function style(feature) {
        return {
            fillColor: "red",
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.4
        };
    }


    $scope.center = Config.map.initialCenter;

    $scope.$on('centerUrlHash', function(event, centerHash) {
        $location.search({ c: centerHash });
      });
    /*
    Counties.get(function(data){
        $scope.geojson = {
            data: data,
            style: style
            //onEachFeature: onEachFeature,
            //resetStyleOnMouseout: true
        };
      });
    */

  }]);
