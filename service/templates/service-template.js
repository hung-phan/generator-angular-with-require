define(['angular'], function(angular) {
    'use strict';

    /* Services */
    angular.module('<%= name %>Services', [])
        .factory('DummyService', [
            function() {
                return 'Hello world';
            }
        ]);
});
