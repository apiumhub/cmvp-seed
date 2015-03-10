/**
 * Created by kevin on 12/15/14.
 */
module.exports = function (grunt) {
    'use strict';

    var ourSrc = [ 'app/**/*.js', 'test/src/**/*.js', 'framework/**/*.js' ];
    return {
        continuous: {
            options: {
                reporter: 'checkstyle',
                reporterOutput: 'reports/jshint.xml'
            },
            src: ourSrc
        }
    };
};