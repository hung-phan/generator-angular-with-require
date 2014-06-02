'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '{,*/}*.js'
// use this if you want to recursively match all subfolders:
// '**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', '<%%= yeoman.app %>']
                }
            },
            test: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: ['.tmp', 'test', '<%%= yeoman.app %>']
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%%= yeoman.dist %>',
                    livereload: false
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: [
                    '<%%= yeoman.app %>/src/{,*/}*.js',
                    '!<%%= yeoman.app %>/src/{,*/}*.spec.js'
                ],
                tasks: ['jshint'],
                options: { livereload: true }
            },
            requirejsConfig: {
                files: ['<%%= yeoman.app %>/src/config.js'],
                tasks: ['requirejs-config-copy'],
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            //uncomment this task, if you want to run karma testing everytime the scripts are changing
            //karma: {
                //files: ['app/src/**/*.js'],
                //tasks: ['karma:unit']
            //},
            gruntfile: { files: ['Gruntfile.js'] },
            compass: {
                files: ['<%%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer', 'concat']
            },
            styles: {
                files: ['<%%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: { livereload: '<%%= connect.options.livereload %>' },
                files: [
                    '<%%= yeoman.app %>/{,*/}*.html', // index.html, 404.html, etc
                    '<%%= yeoman.app %>/src/**/*.html', // arrange code by modules
                    '.tmp/styles/{,*/}*.css',
                    '<%%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        // grunt task for running shell command
        shell: {
            protractor: {
                options: { stdout: true },
                command: 'protractor config/e2e.conf.js'
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%%= yeoman.dist %>/*', '!<%%= yeoman.dist %>/.git*']
                }]
            },
            afterBuild: {
                files: [{
                    dot: true,
                    src: [
                        '<%%= yeoman.dist %>/src/*.js', // remove config.js
                        '<%%= yeoman.dist %>/src/**/*.spec.js', // remove all test files
                        '!<%%= yeoman.dist %>/src/main.js' // keep main.js file
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%%= yeoman.app %>/src/{,*/}*.js',
                '!<%%= yeoman.app %>/src/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // requirejs task
        requirejs: {
            dist: {
                options: {
                    dir: "<%%= yeoman.dist %>/src/",
                    baseUrl: '<%%= yeoman.app %>/src', // Directory to look for the require configuration file
                    mainConfigFile: '<%%= yeoman.app %>/src/config.js', // This is relative to the grunt file
                    modules: [{ name: 'main' }], // create a global bundle
                    preserveLicenseComments: false, // remove all comments
                    removeCombined: true, // remove files which aren't in bundles
                    optimize: 'none', // minify bundles with uglify 2
                    useStrict: true
                }
            }
        },

        // karma testing
        karma: {
            unit: {
                configFile: 'config/karma.conf.js'
            }
        },<% if (testFramework === 'jasmine') { %>

        // Jasmine testing framework configuration options
        jasmine: {
            pivotal: {
                src: '<%%= yeoman.app %>/src/**/*.js',
                options: {
                    specs: 'test/specs/*.spec.js',
                    helpers: 'test/specs/*.helper.js'
                }
            }
        },<% } else { %>

        // Mocha tesing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%%= connect.test.options.hostname %>:<%%= connect.test.options.port %>/index.html']
                }
            }
        },<% } %>

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/src',
                fontsDir: '<%%= yeoman.app %>/styles/fonts',
                importPath: '<%%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: { options: { generatedImagesDir: '<%%= yeoman.dist %>/images/generated' } },
            server: { options: { debugInfo: true } }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: { browsers: ['last 1 version'] },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.',
                    app: {
                        html: '<%%= yeoman.app %>/index.html',
                        ignorePath: '<%= yeoman.app %>/'
                    },
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        'bower-install': {
            app: {
                html: '<%%= yeoman.app %>/index.html',
                ignorePath: '<%%= yeoman.app %>/'
            }
        },

        // bundle script for bower_components into app/src/main.js
        bower: { target: { rjsConfig: '<%%= yeoman.app %>/src/config.js' } },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: { dest: '<%%= yeoman.dist %>' },
            html: '<%%= yeoman.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: { assetsDirs: ['<%%= yeoman.dist %>'] },
            html: ['<%%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%%= yeoman.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%%= yeoman.dist %>/images'
                }],
                options: { cache: false }
            }
        },

        // svg minify
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }
        },

        // html minify
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>',
                    src: '**/*.html',
                    dest: '<%%= yeoman.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: { '<%%= yeoman.dist %>/styles/style.css': [ '.tmp/styles/{,*/}*.css' ] }
            }
        },

        uglify: {
            dist: {
                files: [{
                    src: '<%%= yeoman.dist %>/src/**/*.js', // source files mask
                    expand: true // allow dynamic building
                }]
            }
        },

        concat: {
            dist: {
                src: ['.tmp/styles/{,*/}*.css'],
                dest: '.tmp/styles/style.css'
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%%= yeoman.app %>',
                    dest: '<%%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/sass-bootstrap/fonts/*.*',
                        'bower_components/font-awesome/fonts/*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },<% if (includeModernizr) { %>

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: '<%%= yeoman.app %>/bower_components/modernizr/modernizr.js',
                outputFile: '<%%= yeoman.dist %>/src/vendor/modernizr.js',
                files: {
                    src: [
                        '<%%= yeoman.dist %>/src/{,*/}*.js',
                        '<%%= yeoman.dist %>/styles/{,*/}*.css',
                        '!<%%= yeoman.dist %>/src/vendor/*'
                    ]
                },
                uglify: true
            }
        },<% } %>

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: ['compass:server', 'copy:styles'],
            test: ['copy:styles'],
            dist: [
                'compass',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });

    grunt.registerTask('serve', function(target) {
        if (target === 'dist') { return grunt.task.run(['build', 'connect:dist:keepalive']); }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'concat',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer',
            ]);
        }

        grunt.task.run([
            'connect:test',<% if (testFramework === 'mocha') { %>
            'mocha'<% } else if (testFramework === 'jasmine') { %>
            'jasmine'<% } %>
        ]);
    });

    //function for process requirejs file
    function replaceBetween(string, start, end, what) {
        return string.substring(0, start) + what + string.substring(end);
    };

    grunt.registerTask('requirejs-bundle', function() {
        var indexHTML = grunt.file.read('dist/index.html');
        //remove config file
        indexHTML = replaceBetween(indexHTML,
            indexHTML.indexOf('<!--build tag-->'),
            indexHTML.indexOf('<!--end build tag-->') + '<!--end build tag-->'.length, '');
        grunt.file.write('dist/index.html', indexHTML);
    });

    grunt.registerTask('requirejs-config-copy', function() {
        var mainRequireJs = grunt.file.read('app/src/config.js');
        var configurations = mainRequireJs.substring(
            mainRequireJs.indexOf('paths'),
            mainRequireJs.indexOf('/*--requirejs config copy tag--do not remove*/')
        ) + ',';
        var testMainRequireJs = grunt.file.read('test/test-main.js.template');
        var tmpIndex = testMainRequireJs.indexOf('// configurations');
        testMainRequireJs = replaceBetween(testMainRequireJs, tmpIndex, tmpIndex + '// configurations'.length, configurations);
        grunt.file.write('test/test-main.js', testMainRequireJs);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'cssmin',
        'requirejs',
        'clean:afterBuild',
        'copy:dist',
        'requirejs-bundle',<% if (includeModernizr) { %>
        'modernizr',<% } %>
        'uglify',
        // 'rev', // turns on this task if you want to use revision
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
