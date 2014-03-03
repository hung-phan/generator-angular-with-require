define([
    'angular',
    'services'
], function(angular) {
    'use strict';

    /* Controllers */

    angular.module('webControllers', [
        'webServices'
    ]).controller('HomePageController', [
        '$scope',
        '$location',
        function($scope, $location) {
            /* initialize */
        }
    ]);
});
