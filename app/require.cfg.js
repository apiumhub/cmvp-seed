var require = {
    // Karma serves files from '/base'
    baseUrl: '/app',
    map: {
        "*": {
            'lodash': '/base/node_modules/postal/node_modules/lodash/dist/lodash.min.js',
            'conduitjs': '/base/node_modules/postal/node_modules/conduitjs/lib/conduit.min.js'
        }
    }
};