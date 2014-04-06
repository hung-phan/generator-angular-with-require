define([
    'angular',
    'services'
], function(angular) {
    'use strict';

    /* Controllers */
    angular.module('<%= name %>Controllers', [
        'webServices'
    ]).controller('DummyController', [
        '$scope',
        function($scope) {
            /* initialize */
        }
    ]);
});
