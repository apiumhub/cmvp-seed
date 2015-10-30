/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    return {
        unit: {
            configFile: 'test/karma.conf.js'
        },
        //continuous integration mode: run tests once in PhantomJS browser.
        continuous: {
            configFile: 'test/karma.conf.js',
            singleRun: true
        }
    };
};
