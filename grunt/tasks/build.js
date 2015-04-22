/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    grunt.registerTask('build', ['requirejs:compile-deps', 'requirejs:compile-code']);
};