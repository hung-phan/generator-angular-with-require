define([
    'angular',
    'angular-resource',
    'controllers',
    'services',
    'filters',
    'directives',
    'angular-mocks'
], function(angular) {
    angular.module('webApp', [
        'ngResource',
        'webControllers',
        'webFilters',
        'webServices',
        'webDirectives'
    ]).config(['$interpolateProvider',
        function($interpolateProvider) {
            /* change configure to use [[ to be the interpolation */
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        }
    ]);
});
