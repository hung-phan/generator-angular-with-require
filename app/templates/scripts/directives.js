define(['angular'], function(angular) {
    'use strict';

    /* Directives */
    angular.module('webDirectives', []).directive('paggie', [

        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/paggie.html',
                replace: true,
                scope: {
                    elements: '=',
                    callback: '&'
                },
                link: function(scope, element, attrs) {}
            };
        }
    ]);
});
