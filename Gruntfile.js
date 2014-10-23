module.exports = function (grunt) {
    // region tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-karma');
    // endregion

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            },
            //continuous integration mode: run tests once in PhantomJS browser.
            continuous: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('default', []);
};
