'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        hub: {
            watch: {
                src: [
                    'libs/backbone.remoteforms/Gruntfile.js'
                ],
                tasks: ['build']
            }
        },

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
                tasks: [
                    'sass',
                    'bowercopy:css'  // copy css files after compilation
                ]
            },
            handlebars: {
                files: [
                    '../static/webapp/templates/**/*.hbs'
                ],
                tasks: ['handlebars:compile']
            }
        },

        // Pre-compile handlebars templates for speed!
        handlebars: {
            compile: {
                options: {
                    namespace: 'Templates',
                    amd: true,
                    processName: function(path) {
                        return path.replace(/^.*templates\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    '../static/webapp/templates/compiled.js': [
                        '../static/webapp/templates/**/*.hbs'
                    ]
                }
            }
        },

        // Manage copying of static files to /static directory
        bowercopy: {
            options: {
                'destPrefix': '../static/webapp/static/'
            },
            libs: {
                files: {
                    'js/backbone/backbone.js': 'backbone/backbone.js',
                    'js/backbone/backbone.marionette.js': 'marionette/lib/backbone.marionette.js',
                    'js/backbone/backbone-tastypie.js': 'backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie.js',
                    'js/backbone/backbone.iobind.js': 'backbone.iobind/dist/backbone.iobind.js',
                    'js/backbone/backbone.iosync.js': 'backbone.iobind/dist/backbone.iosync.js',
                    'js/backbone/backbone.remoteforms/forms.js': '../libs/backbone.remoteforms/forms.js',
                    'js/backbone/backbone.remoteforms/utils.js': '../libs/backbone.remoteforms/utils.js',
                    'js/backbone/backbone.remoteforms/templates.js': '../libs/backbone.remoteforms/templates.js',
                    'js/backbone/backbone.remoteforms/templates/compiled.js': '../libs/backbone.remoteforms/templates/compiled.js',
                    'js/foundation.js': 'foundation/js/foundation.js',
                    'js/handlebars/handlebars.js': 'handlebars/handlebars.js',
                    'js/handlebars/handlebars.runtime.js': 'handlebars/handlebars.runtime.js',
                    'js/jquery/jquery.js': 'jquery/jquery.js',
                    'js/jquery/jquery.cookie.js': 'foundation/js/vendor/jquery.cookie.js',
                    'js/modernizr.js': 'modernizr/modernizr.js',
                    'js/require.js': 'requirejs/require.js',
                    'js/socket.io.js': 'socket.io/lib/socket.io.js',
                    'js/text.js': 'text/text.js',
                    'js/underscore.js': 'underscore/underscore.js',
                    'js/events.js': '../libs/events.js',
                    'js/vm.js': '../libs/vm.js'
                }
            },
            css: {
                files: {
                    'css/app.css': '../css/app.css'
                }
            },
            images: {
                files: {
                    'images': '../images'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('build', ['hub', 'sass', 'handlebars']);
    grunt.registerTask('default', ['build', 'watch']);


};
