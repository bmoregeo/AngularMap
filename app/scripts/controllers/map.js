'use strict';

angular.module('mapAppApp')
  .controller('MapCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.defaults = {
        tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        maxZoom: 14,
        path: {
            weight: 10,
            color: '#800000',
            opacity: 1
          }
        };

    $scope.center = {
        lat: 37.270833,
        lng: -76.706944,
        zoom: 12
      };

    $scope.$on('centerUrlHash', function(event, centerHash) {
        $location.search({ c: centerHash });
      });

  }]);
