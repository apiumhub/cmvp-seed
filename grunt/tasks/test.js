/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    grunt.registerTask('test', ['karma:continuous']);
    grunt.registerTask('coverage', ['jshint:continuous']);
};