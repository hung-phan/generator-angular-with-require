define(['angular'], function(angular) {
    'use strict';
    angular.module('<%= name %>Filters', [])
        .filter('numberFilter', function() {
            return function(input) {
                return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            };
        });
});
