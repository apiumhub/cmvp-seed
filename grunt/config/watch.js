/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    var lessFiles = 'assets/less/**/*.less';
    var jsFiles = 'app/**/*.js';
    var templatesFiles = 'templates/**/*.html';
    return {
        'less': {
            files: lessFiles,
            tasks: ['less:compile']
        },
        'js': {
            files: jsFiles,
            tasks: ['requirejs:compile']
        },
        'livereload': {
            files: [lessFiles, jsFiles, templatesFiles],
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
