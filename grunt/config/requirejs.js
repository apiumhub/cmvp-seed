/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    'use strict';
    return {
        'compile-deps': {
            options: {
                mainConfigFile: 'require.build-deps.js',
                optimize: 'none'
            }
        },
        'compile-code': {
            options: {
                mainConfigFile: 'require.build.js',
                optimize: 'none'
            }
        }
    }
};
