define(['angular'], function(angular) {
    'use strict';

    /* Directives */
    angular.module('webDirectives', []).directive('paggie', [

        function() {
            return {
                restrict: 'E',
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
