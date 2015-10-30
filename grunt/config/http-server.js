/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    return {
        dev: {
            root: '.',
            host: '0.0.0.0',
            port: '9000',
            cache: 0, // no cache!
            showDir: false,
            autoIndex: false,
            runInBackground: false
        }
    };
};
