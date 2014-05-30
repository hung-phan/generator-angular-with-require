define(['angular-mocks', 'home'], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var <%= name %>Controller;
        beforeEach(module('homeModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            <%= name %>Controller = $controller('DummyController', {
                '$scope': $scope,
                '$location': $location
            })
        }));

        it('should be equal dummy', function() {
            expect($scope.pageTitle).toEqual('dummy');
        });
    });
});
