requirejs.config({
    'baseUrl': '/app',
    'paths': {
        'lodash': '../node_modules/postal/node_modules/lodash/dist/lodash.min',
        'conduitjs': '../node_modules/postal/node_modules/conduitjs/lib/conduit.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'angular-resource': '../node_modules/angular-resource/angular-resource.min',
        'angular': '../node_modules/angular/angular.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'postal': '../node_modules/postal/lib/postal.min',
        'q': '../node_modules/q/q',
        'functional-option': '../framework/Option',
        'framework': '../framework/ApplicationFactory',
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

        'angular-resource': {
            deps: [ 'angular' ],
            exports: 'angular-resource'
        },

        'jquery': {
            exports: '$'
        },

        'functional-option': {
            exports: 'Option'
        },

        'framework': {
            deps: ['angular', 'functional-option'],
            exports: 'ApplicationFactory'
        },

        'postal':{
            exports: 'postal'
        }

    },

    'deps': ['angular', 'angular-route', 'angular-resource', 'jquery', 'q', 'postal', 'meld', 'framework', 'functional-option']
});
requirejs(['main', 'postal', 'q', 'meld'], function (main) {
    console.log(main);
    main(window);
});

