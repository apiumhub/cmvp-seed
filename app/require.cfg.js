requirejs.config({
    'baseUrl': '/app',
    'paths': {
        'lodash': '../node_modules/postal/node_modules/lodash/dist/lodash.min',
        'conduitjs': '../node_modules/postal/node_modules/conduitjs/lib/conduit.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'angular': '../node_modules/angular/angular.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'postal': '../node_modules/postal/lib/postal.min',
        'q': '../node_modules/q/q',
        'framework': '../node_modules/cmvp-framework/src/ApplicationFactory',
        'cmvp': '../node_modules/cmvp-framework/src/cmvp',
        'meld': '../node_modules/meld/meld'
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
        },

        'framework': {
            deps: ['angular'],
            exports: 'ApplicationFactory'
        },

        'postal':{
            exports: 'postal'
        }

    },

    'deps': ['main', 'angular', 'angular-route', 'jquery', 'q', 'postal', 'meld', 'framework'],
    'callback': function (main) {
        main(window);
    }
});

