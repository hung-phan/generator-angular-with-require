requirejs.config({
    baseUrl: './scripts',
    paths: {
        'angular': '../bower_components/angular/angular',
        /*require angular resource for easily handling sending and receiving request*/
        'angular-resource': '../bower_components/angular-resource/angular-resource',<% if (includeAngularAnimate) { %>
        /*require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)*/
        'angular-animate': '../bower_components/angular-animate/angular-animate', <% } %>
        /*require angular for better handling and binding controller*/
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',<% if (includeBindonce) { %>
        /*require bindonce to optimize watch for angular binding [https://github.com/Pasvaz/bindonce]*/
        'bindonce': '../bower_components/angular-bindonce/bindonce',<% } %><% if (includeUIBootstrap) { %>
        /*require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]*/
        'ui-bootstrap-tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',<% }%><% if (includeModernizr) { %>
        /*require modernizr*/
        'modernizr': '../bower_components/modernizr/modernizr',<% } %>
        /*require jquery*/
        'jquery': '../bower_components/jquery/dist/jquery',<% if (includeLodash) { %>
        /*require lodash library [http://lodash.com/docs]*/
        'lodash': '../bower_components/lodash/dist/lodash',<% } %><% if (cssFramework === 'SASSBootstrap') { %>
        /*require bootstrap.js to make bootstrap components work*/
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',<% } %>
        /*require main controller*/
        'controllers': 'controllers/controllers',
        /*require main directive*/
        'directives': 'directives/directives',
        /*require main filter*/
        'filters': 'filters/filters',
        /*require main service*/
        'services': 'services/services'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },<% if (includeLodash) { %>
        'lodash': {
            exports: '_'
        },<% } %>
        'angular-resource': ['angular'],<% if (includeAngularAnimate) { %>
        'angular-animate': ['angular'],<% } %>
        'angular-ui-router': ['angular'],<% if (includeBindonce) { %>
        'bindonce': ['angular'],<% } %><% if (includeUIBootstrap) { %>
        'ui-bootstrap-tpls': ['angular'],<% } %><% if (cssFramework === 'SASSBootstrap') { %>
        'bootstrap': ['jquery'],<% } %>
        'controllers': ['angular', 'services'],
        'filters': ['angular'],
        'services': ['angular'],
        'directives': ['angular']
    }
});
