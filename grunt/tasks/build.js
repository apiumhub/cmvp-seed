/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    var compileTasks = [
        'sass:dist',
        'requirejs:compile'
    ];
    grunt.registerTask('build:dev', ['preprocess:dev'].concat(compileTasks));
    grunt.registerTask('build:prod', ['preprocess:prod'].concat(compileTasks));
};
