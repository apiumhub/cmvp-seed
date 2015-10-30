requirejs.config({
    'deps': ['/base/app/require.cfg.js'],
    callback: function() {
        var config = requirejs.s.contexts._.config;
        config.baseUrl = '/base' + config.baseUrl;
        config.paths['test-helpers'] = '../node_modules/cmvp-framework/src/test-helpers';
        config.paths['sinon'] = '../node_modules/sinon/lib/sinon';
        config.callback = runTests;
        requirejs.config(config);
    }
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
