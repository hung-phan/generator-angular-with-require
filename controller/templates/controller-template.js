define(['angular', 'angular-ui-router'], function(angular) {
    angular.module('<%= name %>Module', ['ui.router']).config(['$stateProvider', function($stateProvider) {
        /*config path for home page*/
        $stateProvider.state('<%= name %>', {
            url: '/<%= name %>',
            templateUrl: 'src/<%= name %>/<%= name %>.tpl.html',
            controller: 'Dummy<%= uppercaseName %>Controller'
        });
    }]).controller('Dummy<%= uppercaseName %>Controller', [
        '$scope',
        '$location',
        function($scope, $location) {
            /* initialize */
            $scope.pageTitle = 'dummy';
        }
    ]);
});
