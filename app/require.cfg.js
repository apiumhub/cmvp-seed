var require = {
    baseUrl: '/app',
    map: {
        "*": {
            'lodash': '/node_modules/postal/node_modules/lodash/dist/lodash.min.js',
            'conduitjs': '/node_modules/postal/node_modules/conduitjs/lib/conduit.min.js',
            'angular-route': '/node_modules/angular-route/angular-route.min.js',
            'angular': '/node_modules/angular/angular.min.js',
            'jquery': '/node_modules/jquery/dist/jquery.min.js',
            'postal': '/node_modules/postal/lib/postal.min.js',
            'q': '/node_modules/q/q.js'
        }
    },

    'shim': {
        'angular': {
            exports: 'angular'
        },

        'angular-route': {
            deps: [ 'angular' ],
            exports: 'angular-route'
        },

        'jquery': {
            exports: '$'
        }
    }
};