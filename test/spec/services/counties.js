'use strict';

describe('Service: Counties', function () {

  // load the service's module
  beforeEach(module('mapAppApp'));

  // instantiate service
  var Counties;
  beforeEach(inject(function (_Counties_) {
    Counties = _Counties_;
  }));

  it('should do something', function () {
    expect(!!Counties).toBe(true);
  });

});
