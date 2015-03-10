/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    return {
        compile: {
            files: {
                'build/<%= pkg.name %>.min.css': 'assets/sass/main.scss'
            }
        }
    };
};