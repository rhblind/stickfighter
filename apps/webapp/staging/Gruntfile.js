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
                "destPrefix": "../static/webapp/static/"
            },
            libs: {
                files: {
                    "js/backbone/backbone.js": "backbone/backbone.js",
                    "js/backbone/backbone.marionette.js": "marionette/lib/backbone.marionette.js",
                    "js/backbone/backbone-tastypie.js": "backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie.js",
                    "js/backbone/backbone.iobind.js": "backbone.iobind/dist/backbone.iobind.js",
                    "js/backbone/backbone.iosync.js": "backbone.iobind/dist/backbone.iosync.js",
                    "js/foundation.js": "foundation/js/foundation.js",
                    "js/handlebars.js": "handlebars/handlebars.js",
                    "js/hbs": "require-handlebars-plugin/hbs",
                    "js/hbs.js": "require-handlebars-plugin/hbs.js",
                    "js/jquery/jquery.js": "jquery/jquery.js",
                    "js/jquery/jquery.cookie.js": "foundation/js/vendor/jquery.cookie.js",
                    "js/modernizr.js": "modernizr/modernizr.js",
                    "js/require.js": "requirejs/require.js",
                    "js/socket.io.js": "socket.io/lib/socket.io.js",
                    "js/text.js": "text/text.js",
                    "js/underscore.js": "underscore/underscore.js",
                    "js/events.js": "../libs/events.js",
                    "js/vm.js": "../libs/vm.js"
                }
            },
            css: {
                files: {
                    "css/app.css": "../css/app.css"
                }
            },
            images: {
                files: {
                    "images": "../images"
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
