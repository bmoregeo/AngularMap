'use strict';

describe('Controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('mapAppApp'));

  var MapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a the center of the map to the scope', function () {
    expect(scope.center).toBe({
        lat: 37.270833,
        lng: -76.706944,
        zoom: 12
    });
  });
});
