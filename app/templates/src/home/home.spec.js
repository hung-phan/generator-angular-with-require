define(['angular-mocks', 'home/home'], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var homePageController;
        beforeEach(module('homePageModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            homePageController = $controller('HomePageController', {
                '$scope': $scope,
                '$location': $location
            })
        }));

        it('should be equal dummy', function() {
            expect($scope.pageTitle).toEqual('dummy');
        });
    });
});
