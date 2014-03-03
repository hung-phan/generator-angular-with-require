define(['loading-helper'], function() {
    describe('angular template testing', function() {
        var element;
        var $scope;
        beforeEach(module('webApp'));
        beforeEach(inject(function($compile, _$rootScope_) {
            $scope = _$rootScope_;
            element = angular.element("<div paggie>[[2 + 2]]</div>");
            element = $compile(element)($scope);
        }));

        it('should do something useful', function() {
            $scope.$digest();
            expect(element.html()).toBe("4");
        });
    });
});
