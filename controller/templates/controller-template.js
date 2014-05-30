define(['angular', 'angular-ui-router'], function(angular) {
    angular.module('<%= name %>Module', ['ui.router']).config(['$stateProvider', function($stateProvider) {
        /*config path for home page*/
        $stateProvider.state('<%= name %>', {
            url: '/<%= name %>',
            templateUrl: 'src/<%= name %>/<%= name %>.tpl.html',
            controller: 'DummyController'
        });
    }]).controller('DummyController', [
        '$scope',
        '$location',
        function($scope, $location) {
            /* initialize */
            $scope.pageTitle = 'dummy';
        }
    ]);
});
