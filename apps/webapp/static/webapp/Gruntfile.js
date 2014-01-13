'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            }
        },

        bowercopy: {
            options: {
                // Task-specific options go here
                "destPrefix": "libs/"
            },
            libs: {
                files: {
                    "backbone.js": "backbone/backbone.js",
                    "backbone.marionette.js": "marionette/lib/backbone.marionette.js",
                    "backbone-tastypie.js": "backbone-tastypie/backbone-tastypie/static/js/backbone-tastypie.js",
                    "backbone.iobind.js": "backbone.iobind/dist/backbone.iobind.js",
                    "backbone.iosync.js": "backbone.iobind/dist/backbone.iosync.js",
                    "foundation.js": "foundation/js/foundation.js",
                    "handlebars.js": "handlebars/handlebars.js",
                    "hbs.js": "require-handlebars-plugin/hbs.js",
                    "jquery.js": "jquery/jquery.js",
                    "jquery.cookie.js": "foundation/js/vendor/jquery.cookie.js",
                    "modernizr.js": "modernizr/modernizr.js",
                    "require.js": "requirejs/require.js",
                    "socket.io.js": "socket.io/lib/socket.io.js",
                    "text.js": "text/text.js",
                    "underscore.js": "underscore/underscore.js"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);


};
