/**
 * Created by kevin on 10/23/14.
 */
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/TestSpec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    baseUrl: '/base/app',
    map: {
        "*": {
            'lodash': '/base/node_modules/postal/node_modules/lodash/dist/lodash.min.js',
            'conduitjs': '/base/node_modules/postal/node_modules/conduitjs/lib/conduit.min.js',
            'angular-route': '/base/node_modules/angular-route/angular-route.min.js',
            'angular': '/base/node_modules/angular/angular.min.js',
            'jquery': '/base/node_modules/jquery/dist/jquery.min.js',
            'postal': '/base/node_modules/postal/lib/postal.min.js',
            'q': '/base/node_modules/q/q.js',
            'functional-option': '/base/framework/Option.js',
            'framework': '/base/framework/ApplicationFactory.js'
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
        },

        'functional-option': {
            exports: ['None', 'Some', 'throwException', 'Option']
        },

        'framework': {
            deps: ['angular', 'functional-option'],
            exports: 'ApplicationFactory'
        },

        'main': {
            deps: ['framework'],
            exports: 'main'
        }
    },

    deps: ['framework', 'functional-option', 'angular', 'angular-route', 'jquery', 'q', 'postal', 'main'],

    callback: test_main
});

function test_main() {
    // initialize the base application
    main();
    require(app.manifest.src, function () {
        require(tests, window.__karma__.start);
    });
}

/**
 * Function.prototype.bind polyfill
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs   = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}
/*************************************/