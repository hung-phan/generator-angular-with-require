define(['angular'], function(angular) {
    'use strict';
    /* Directives */

    angular.module('<%= name %>Directives', [])
        .directive('paggie', [

            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'partials/paggie.html',
                    scope: {},
                    link: function(scope, element, attrs) {}
                };
            }
        ]);
});
