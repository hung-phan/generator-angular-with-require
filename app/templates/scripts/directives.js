define(['angular'], function(angular) {
    'use strict';
	/* Directives */

    angular.module('webDirectives', [])
	.directive('paggie', [
		function() {
	    	return {
	    		restrict : 'E',
	    		replace : true,
	    		templateUrl : 'partials/paggie.html',
	    		scope : {
	    			elements : '=',
	    			callback : '&'
	    		}, link : function(scope, element, attrs) {
	    		}
	    	};
		}
	]);
});
