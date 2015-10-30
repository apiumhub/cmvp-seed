/**
 * Created by apium on 15/07/15.
 */
define([
    'framework'
], function(ApplicationFactory) {

    /** AngularJS App Configuration **/
    function AngularConfig($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/model/:modelId', {templateUrl: '/templates/numbersView.html', controller: 'NumbersController'})
            .otherwise({templateUrl: '/templates/numbersView.html', controller: 'NumbersController'});
    }

    AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

    /** Application Building **/
    var app = ApplicationFactory.newRequireApplication('RequireJS')
        .composedWith(ApplicationFactory.newAngularApplication('AngularApp', [
            'ngRoute'
        ], AngularConfig));

    app.manifest = {
        authors: [ 'apiumtech' ],
        version: 0.1,
        src: [
            'ui/PomodoroController',
            'ui/NumbersController'
        ]
    };

    /** Application basic configuration **/
    app.registerObject({name: 'SourceList', dependencies: app.manifest.src}, function() {
        return app.manifest.src;
    });

    app.registerObject({name: 'Application', dependencies: ['SourceList']}, function() {
        return app;
    });

    return app;

});
