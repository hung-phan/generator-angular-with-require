define(['loading-helper'], function() {
    describe('angular template binding', function() {
        var element;
        var $scope;
        beforeEach(module('webApp'));
        beforeEach(inject(function($compile, _$rootScope_) {
            $scope = _$rootScope_;
            element = angular.element("<div>[[2 + 2]]</div>");
            element = $compile(element)($scope);
        }));

        it('should be equal 4', function() {
            $scope.$digest();
            expect(element.html()).toBe('4');
        });
    });
    describe('directive with templateUrl testing', function() {
        var element;
        var $scope;
        beforeEach(module('webApp'));
        beforeEach(module('partials/paggie.html'));
        beforeEach(inject(function($compile, _$rootScope_) {
            $scope = _$rootScope_;
            element = angular.element("<paggie></paggie>");
            element = $compile(element)($scope);
        }));

        it('template should be binded', function() {
            $scope.$digest();
            expect(element.html()).toBe('4');
        });
    });
});
