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
    'baseUrl': '/base/app',
    'paths': {
        'lodash': '/base/node_modules/postal/node_modules/lodash/dist/lodash.min',
        'conduitjs': '/base/node_modules/postal/node_modules/conduitjs/lib/conduit.min',
        'angular-route': '/base/node_modules/angular-route/angular-route.min',
        'angular': '/base/node_modules/angular/angular.min',
        'jquery': '/base/node_modules/jquery/dist/jquery.min',
        'postal': '/base/node_modules/postal/lib/postal.min',
        'q': '/base/node_modules/q/q',
        'functional-option': '/base/framework/Option',
        'framework': '/base/framework/ApplicationFactory',
        'meld': '/base/node_modules/meld/meld',
        'sinon': '/base/node_modules/sinon/lib/sinon'
    },

    'shim': {
        'angular': {
            exports: 'angular'
        },

        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
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
        }
    },

    'deps': ['angular', 'angular-route', 'jquery', 'q', 'sinon', 'postal', 'meld', 'framework', 'functional-option', 'main'],

    callback: test_main
});

function test_main() {
    // initialize the base application
    main();
    // run tests
    require(app.manifest.src, function () {
        require(tests, window.__karma__.start);
    });
}

/**
 * Function.prototype.bind polyfill
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {
            },
            fBound = function () {
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

function fakePromise(doneValue, errorValue) {
    var self = {
        then: function (onOk, onFail) {
            if (doneValue) {
                onOk(doneValue);
                return self;
            }

            if (errorValue) {
                onFail(errorValue);
                return self;
            }
        }
    };

    return self;
}