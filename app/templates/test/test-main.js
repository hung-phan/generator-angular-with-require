var allTestFiles = [];
var TEST_REGEXP = /test\/specs\/\w*Spec\.js$/;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

requirejs.config({
    /*Karma serves files from '/app'*/
    baseUrl: 'base/app/scripts',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'loading-helper': '../../test/helpers/loadingHelper',
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
        'angular-mocks': ['angular'],
        'controllers': ['angular', 'services'],
        'filters': ['angular'],
        'services': ['angular'],
        'directives': ['angular']
    },
    // ask Require.js to load these files (all our tests)
    deps: allTestFiles,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
