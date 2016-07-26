/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    var scssFiles = 'assets/scss/**/*.scss';
    var jsFiles = 'app/**/*.js';
    var templatesFiles = 'templates/**/*.html';
    return {
        'sass': {
            files: scssFiles,
            tasks: ['sass:dist']
        },
        'js': {
            files: jsFiles,
            tasks: ['requirejs:compile']
        },
        'livereload': {
            files: [scssFiles, jsFiles, templatesFiles],
            options: {
                livereload: 35729
            }
        },
        'eslint': {
            options: {
                atBegin: true
            },
            files: ['app/**/*.js', 'test/**/*.js', 'grunt/**/*.js', 'Gruntfile.js'],
            tasks: ['eslint:check']
        }
    };
};
