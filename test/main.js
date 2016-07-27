requirejs.config({
    'baseUrl': '/base/app',
    'deps': [
        'ui/PomodoroController',
        'ui/NumbersController'
    ],
    'paths': {
        'lodash': '/base/node_modules/postal/node_modules/lodash/dist/lodash.min',
        'postal': '/base/node_modules/postal/lib/postal.min',
        'q': '/base/node_modules/q/q',
        'cmvp': '/base/node_modules/cmvp-framework/src/cmvp',
        'meld': '/base/node_modules/meld/meld',
    },
    callback: runTests
});

function runTests() {
    var tests = [];
    for (var file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (endsWith(file, 'Test.js')) {
                tests.push(file);
            }
        }
    }

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    require(tests, window.__karma__.start);
}
