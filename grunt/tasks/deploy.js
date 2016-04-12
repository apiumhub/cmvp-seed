/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    grunt.registerTask('deploy:dev', [
        'build:dev',
        'concurrent:dev-deploy'
    ]);
    grunt.registerTask('deploy:prod', [
        'build:prod'
    ]);
};
