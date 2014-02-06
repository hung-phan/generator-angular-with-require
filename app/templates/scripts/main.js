define('main', [], function() {
    requirejs.config({
        paths: {
            'angular': '../bower_components/angular/angular',
            'angular-resource': '../bower_components/angular-resource/angular-resource',
            'angular-route': '../bower_components/angular-route/angular-route',<% if (includeUIBootstrap) { %>
            'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',<% }%>
            'jquery': '../bower_components/jquery/jquery',<% if (includeUnderscore) { %>
            'underscore': '../bower_components/underscore/underscore',<% } %><% if (cssFramework === 'SASSBootstrap') { %>
            'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',<% } %>
            'controllers': 'controllers/controllers',
            'directives': 'directives/directives',
            'filters': 'filters/filters',
            'services': 'services/services'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-resource': ['angular'],
            'angular-route': ['angular'],<% if (includeUIBootstrap) { %>
            'ui-bootstrap': ['angular'],<% } %><% if (cssFramework === 'SASSBootstrap') { %>
            'bootstrap': ['jquery'],<% } %>
            'controllers': ['angular', 'services'],
            'filters': ['angular'],
            'services': ['angular'],
            'directives': ['angular']
        }
    });

    Window.name = 'NG_DEFER_BOOTSTRAP!';

    requirejs([
        'angular',
        'jquery',
        'angular-resource',
        'angular-route',<% if (includeUIBootstrap) { %>
        'ui-bootstrap',<% } %><% if (includeUnderscore) { %> 
        'underscore',<% } %><% if (cssFramework === 'SASSBootstrap') { %>
        'bootstrap',<% } %>
        'services',
        'filters',
        'directives',
        'controllers'
    ], function(angular, $) {
        'use strict';

        /* App Module */
        $(document).ready(function() {
            // smart works go here
            var $html = $('html');
            angular.module('webApp', [
                'ngRoute',
                'ngResource',<% if (includeUIBootstrap) { %>
                'ui.bootstrap',<% } %>
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
