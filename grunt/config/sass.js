/**
 * Created by apium on 26/07/2016.
 */
module.exports = function(grunt) {
    'use strict';

    return {
        dist: {
            options: {
                style: 'compressed',
                noCache: true
            },
            files: {
                'build/css/<%= pkg.name %>.min.css': 'assets/scss/main.scss'
            }
        }
    };
};
