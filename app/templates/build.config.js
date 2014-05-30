/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference code that we need to place into the build
   * process somewhere. While the 'app' property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  requirejs: {
    paths: {
        'angular': '../bower_components/angular/angular',
        /*require angular mocks for testing*/
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        /*require angular resource for easily handling sending and receiving request*/
        'angular-resource': '../bower_components/angular-resource/angular-resource',<% if (includeAngularAnimate) { %>
        /*require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)*/
        'angular-animate': '../bower_components/angular-animate/angular-animate', <% } %>
        /*require angular for better handling and binding controller*/
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',<% if (includeBindonce) { %>
        /*require bindonce to optimize watch for angular binding [https://github.com/Pasvaz/bindonce]*/
        'bindonce': '../bower_components/angular-bindonce/bindonce',<% } %><% if (includeUIBootstrap) { %>
        /*require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]*/
        'ui-bootstrap-tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',<% }%>
        /*require jquery*/
        'jquery': '../bower_components/jquery/dist/jquery',<% if (includeLodash) { %>
        /*require lodash library [http://lodash.com/docs]*/
        'lodash': '../bower_components/lodash/dist/lodash',<% } %><% if (cssFramework === 'SASSBootstrap') { %>
        /*require bootstrap.js to make bootstrap components work*/
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',<% } %>
        /*require home module*/
        'home': 'home/home'
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jquery'] },
        'anuglar-mocks': ['angular'],<% if (includeLodash) { %>
        'lodash': { exports: '_' },<% } %>
        'angular-resource': ['angular'],<% if (includeAngularAnimate) { %>
        'angular-animate': ['angular'],<% } %>
        'angular-ui-router': ['angular'],<% if (includeBindonce) { %>
        'bindonce': ['angular'],<% } %><% if (includeUIBootstrap) { %>
        'ui-bootstrap-tpls': ['angular'],<% } %><% if (cssFramework === 'SASSBootstrap') { %>
        'bootstrap': ['jquery']<% } %>
    }
  }
};


