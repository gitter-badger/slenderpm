'use strict';

describe('Controller: GanttCtrl', function () {

  // load the controller's module
  beforeEach(module('slenderpmApp'));

  var GanttCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GanttCtrl = $controller('GanttCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});