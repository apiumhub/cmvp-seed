module.exports = function (grunt) {
    // region tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    // endregion

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'karma': {
            unit: {
                configFile: 'test/karma.conf.js'
            },
            //continuous integration mode: run tests once in PhantomJS browser.
            continuous: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        'http-server': {
            dev: {
                root: '.',
                port: '9000',
                cache: 0, // no cache!
                showDir: false,
                autoIndex: false,
                runInBackground: false
            }
        },
        'requirejs': {
            compile: {
                options: {
                    baseUrl: '.',
                    name: 'app/main',
                    mainConfigFile: 'require.build.js',
                    out: 'build/<%= pkg.name %>.min.js',
                    optimize: 'uglify2'
                }
            }
        },
        'less': {
            'compile': {
                options: {
                    paths: ['assets/less'],
                    cleancss: true,
                    strictImports: true,
                    strictMath: true,
                    strictUnits: true,
                    ieCompat: true,
                    compress: true
                },

                files: {
                    'build/<%= pkg.name %>.min.css': 'assets/less/main.less'
                }
            }
        },
        'watch': {
            'less': {
                files: 'assets/less/**/*.less',
                tasks: ['less:compile']
            }
        },
        'concurrent': {
            'dev-deploy': {
                tasks: ['watch:less', 'http-server:dev'],
                options: {
                    'logConcurrentOutput': true
                }
            }
        }
    });

    grunt.registerTask('dev-deploy', ['less:compile', 'concurrent:dev-deploy']);
};
