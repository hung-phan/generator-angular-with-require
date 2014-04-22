require([
    'angular',
    'jquery',
    'angular-resource',<% if (includeAngularAnimate) { %>
    'angular-animate', <% } %>
    'angular-ui-router',<% if (includeBindonce) { %>
    'bindonce',<% } %><% if (includeUIBootstrap) { %>
    'ui-bootstrap-tpls',<% } %><% if (includeLodash) { %>
    'lodash',<% } %><% if (cssFramework === 'SASSBootstrap') { %>
    'bootstrap',<% } %><% if (includeModernizr) { %>
    'modernizr',<% } %>
    'services',
    'filters',
    'directives',
    'controllers'
], function(angular) {
    'use strict';

    /*App Module*/
    angular.element(document).ready(function () {
        /*smart works go here*/
        var $html = angular.element('html');
        angular.module('webApp', [
            'ui.router',
            'ngResource',<% if (includeUIBootstrap) { %>
            'ui.bootstrap',<% } %><% if (includeAngularAnimate) { %>
            'ngAnimate', <% } %><% if (includeBindonce) { %>
            'pasvaz.bindonce',<% } %>
            'webControllers',
            'webFilters',
            'webServices',
            'webDirectives'
        ]).config(['$stateProvider', '$urlRouterProvider', '$interpolateProvider', '$provide',
            function($stateProvider, $urlRouterProvider, $interpolateProvider, $provide) {
                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'partials/home-page.html',
                        controller: 'HomePageController'
                    });

                $urlRouterProvider.otherwise('/');

                /*change configure to use [[ to be the interpolation. [[2 + 2]]*/
                $interpolateProvider.startSymbol('[[');
                $interpolateProvider.endSymbol(']]');

                /* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
                $provide.decorator('$rootScope', [
                    '$delegate',
                    function($delegate) {
                        $delegate.safeApply = function(fn) {
                            var phase = $delegate.$$phase;
                            if (phase === '$apply' || phase === '$digest') {
                                if (fn && typeof fn === 'function') {
                                    fn();
                                }
                            } else {
                                $delegate.$apply(fn);
                            }
                        };
                        return $delegate;
                    }
                ]);
            }
        ]);
        /*bootstrap model*/
        angular.bootstrap($html, ['webApp']);
    });
});
