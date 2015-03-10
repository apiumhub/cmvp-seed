/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    return {
        compile: {
            options: {
                baseUrl: '.',
                name: 'app/main',
                mainConfigFile: 'require.build.js',
                out: 'build/<%= pkg.name %>.min.js',
                optimize: 'uglify2'
            }
        }
    }
};
