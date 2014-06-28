define(['angular-mocks', '<%= name %>/<%= name %>'], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var dummy<%= uppercaseName %>Controller;
        beforeEach(module('<%= name %>Module'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            dummy<%= uppercaseName %>Controller = $controller('Dummy<%= uppercaseName %>Controller', {
                '$scope': $scope,
                '$location': $location
            });
        }));

        it('should be equal dummy', function() {
            expect($scope.pageTitle).toEqual('dummy');
        });
    });
});
