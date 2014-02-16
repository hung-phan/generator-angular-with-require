define(['angular', 'angular-mocks'], function(angular) {
    describe('angular template testing', function() {
        var element;
        var $scope;

        beforeEach(inject( function($compile, $rootScope) {
            $scope = $rootScope;
            element = angular.element("<div>{{2 + 2}}</div>");
            element = $compile(element)($rootScope);
        } ));

        it('should do something useful', function() {
            $scope.$digest();
            expect(element.html()).toBe("4");
        });
    });
});
