module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [ {pattern: 'node_modules/**', included: false},
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/postal/node_modules/conduitjs/lib/conduit.min.js',
            'node_modules/postal/node_modules/lodash/dist/lodash.min.js',
            'node_modules/postal/lib/postal.min.js',
            'node_modules/requirejs/require.js',
            'node_modules/sinon/pkg/sinon*.js',
            /** Load Application Framework **/
            'framework/Option.js',
            'framework/ApplicationFactory.js',
            /** Load Application Manifest **/
            'app/manifest.js',
            /** Load Tests **/
            'test/src/**',
            'test/main.js'

        ],
        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress', 'junit', 'teamcity'
        // CLI --reporters progress
        reporters: ['progress'],

        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'logs/test-results_site.html'
        },

        port: 9876,

        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: true,

        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: ['PhantomJS'],

        captureTimeout: 10000,

        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500
    })
}