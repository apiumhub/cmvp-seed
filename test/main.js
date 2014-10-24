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

var base = [
    '/base/framework/Option.js',
    '/base/framework/ApplicationFactory.js'
];

var manifest = [
    '/base/app/manifest.js'
];

var libs = [
    '/base/node_modules/angular/angular.min.js',
    '/base/node_modules/angular-route/angular-route.min.js',
    '/base/node_modules/postal/lib/postal.min.js',
    '/base/node_modules/jquery/dist/jquery.min.js'
];


requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app',
    map: {
        "*": {
            'lodash': '/base/node_modules/postal/node_modules/lodash/dist/lodash.min.js',
            'conduitjs': '/base/node_modules/postal/node_modules/conduitjs/lib/conduit.min.js'
        }
    }
});

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

require(libs, function () {
    require(base, function () {
        require(manifest, function () {
            require(app.manifest.src, function () {
                require(tests, window.__karma__.start);
            });
        });
    });
});
