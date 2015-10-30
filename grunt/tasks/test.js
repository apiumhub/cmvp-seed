/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    grunt.registerTask('test', ['karma:continuous', 'eslint:check']);
    grunt.registerTask('watch-test', ['concurrent:watch-test']);
    grunt.registerTask('watch-eslint', ['concurrent:watch-eslint']);
};
