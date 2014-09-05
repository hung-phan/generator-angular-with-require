define(['angular-mocks', 'home/home'], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var homeController;
        beforeEach(module('homeModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            homeController = $controller('HomeController', {
                '$scope': $scope,
                '$location': $location
            });
        }));

        it('should be equal dummy', function() {
            expect($scope.pageTitle).toEqual('dummy');
        });
    });
});
