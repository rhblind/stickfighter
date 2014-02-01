'use strict';

module.exports = function(grunt)
{
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            handlebars: {
                files: ['templates/**/*.hbs'],
                tasks: ['handlebars:compile']
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'Templates',
                    amd: true,
                    processName: function(path) {
                        // strip off `templates` from the path
                        return path.replace(/^.*templates\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    'templates/compiled.js': [
                        'templates/**/*.hbs'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('build', ['handlebars']);
    grunt.registerTask('default', ['build', 'watch']);
};
