/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    return {
        compile: {
            options: {
                baseUrl: './app',
                mainConfigFile: 'app/require.cfg.js',
                out: 'build/<%= pkg.name %>.min.js',
                optimize: 'none'
            }
        }
    };
};

