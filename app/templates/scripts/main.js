define('main', [], function() {
    requirejs.config({
        paths: {
            'angular': '../bower_components/angular/angular.min',
            'angular-resource': '../bower_components/angular-resource/angular-resource.min',
            'angular-route': '../bower_components/angular-route/angular-route.min',
            'jquery': '../bower_components/jquery/jquery.min'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-resource': ['angular'],
            'angular-route': ['angular'],
            'controllers': ['angular', 'services'],
            'filters': ['angular'],
            'services': ['angular'],
            'directives': ['angular']
        }
    });

    Window.name = "NG_DEFER_BOOTSTRAP!";

    requirejs([
        'angular',
        'jquery',
        'angular-resource',
        'angular-route',
        'controllers',
        'filters',
        'services',
        'directives'
    ], function(angular, $) {
        'use strict';

        /* App Module */
        $(document).ready(function() {
            // smart works go here
            var $html = $('html');
            angular.module('webApp', [
                'ngRoute',
                'ngResource',
                'webControllers',
                'webFilters',
                'webServices',
                'webDirectives'
            ]).config(['$routeProvider', '$interpolateProvider',
                function($routeProvider, $interpolateProvider) {
                    $routeProvider.
                    when('/', {
                        templateUrl: 'partials/home.html',
                        controller: 'Home'
                    }).
                    when('/404', {
                        templateUrl: '404.html'
                    }).
                    otherwise({
                        redirectTo: '/404'
                    });
                    /* change configure to use [[ to be the interpolation */
                    $interpolateProvider.startSymbol('[[');
                    $interpolateProvider.endSymbol(']]');
                }
            ]);
            // bootstrap model
            angular.bootstrap($html, ['webApp']);
        });
    });
});
