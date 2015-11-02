/**
 * Created by jose on 01/07/2015.
 */
module.exports = function(grunt) {
    return {
        dev: {
            inline: true,
            src: './templates/index-dev.html.tmpl',
            dest: './index.html'
        },
        prod: {
            inline: true,
            src: './templates/index-prod.html.tmpl',
            dest: './index.html'
        }
    };
};
