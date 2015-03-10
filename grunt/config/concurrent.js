/**
 * Created by kevin on 2/9/15.
 */
module.exports = function (grunt) {
    return {
        'dev-deploy': {
            tasks: ['watch:sass', 'http-server:dev'],
            options: {
                'logConcurrentOutput': true
            }
        }
    };
}