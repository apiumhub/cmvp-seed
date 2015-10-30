module.exports = function(grunt) {
    'use strict';

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        tmpDir: 'build/tmp',
        tmpSrcDir: 'src'
    };

    grunt.initConfig(config);

    // Read config files from the `grunt/config/` folder
    grunt.file.expand('grunt/config/*.js').forEach(function(path) {
        var property = /grunt\/config\/(.+)\.js/.exec(path)[1];
        var module = require('./' + path);
        config[property] = typeof module === 'function' ? module(grunt) : module;
    });

    // Load development dependencies specified in package.json
    for (var dependency in config.pkg.devDependencies) {
        if (/^grunt-/.test(dependency)) {
            grunt.loadNpmTasks(dependency);
        }
    }

    // Load tasks from the `grunt-tasks/` folder
    grunt.loadTasks('grunt/tasks');
};
