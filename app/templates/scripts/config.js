requirejs.config({
    baseUrl: './scripts',
    paths: {
        'angular': '../vendor/angular/angular',
        /*require angular resource for easily handling sending and receiving request*/
        'angular-resource': '../vendor/angular-resource/angular-resource',<% if (includeAngularAnimate) { %>
        /*require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)*/
        'angular-animate': '../vendor/angular-animate/angular-animate', <% } %>
        /*require angular for better handling and binding controller*/
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',<% if (includeBindonce) { %>
        /*require bindonce to optimize watch for angular binding [https://github.com/Pasvaz/bindonce]*/
        'bindonce': '../vendor/angular-bindonce/bindonce',<% } %><% if (includeUIBootstrap) { %>
        /*require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]*/
        'ui-bootstrap-tpls': '../vendor/angular-bootstrap/ui-bootstrap-tpls',<% }%><% if (includeModernizr) { %>
        /*require modernizr*/
        'modernizr': '../vendor/modernizr/modernizr',<% } %>
        /*require jquery*/
        'jquery': '../vendor/jquery/dist/jquery',<% if (includeLodash) { %>
        /*require lodash library [http://lodash.com/docs]*/
        'lodash': '../vendor/lodash/dist/lodash',<% } %><% if (cssFramework === 'SASSBootstrap') { %>
        /*require bootstrap.js to make bootstrap components work*/
        'bootstrap': '../vendor/sass-bootstrap/dist/js/bootstrap',<% } %>
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
        'angular': { exports: 'angular', deps: ['jquery'] },<% if (includeLodash) { %>
        'lodash': { exports: '_' },<% } %>
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
