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

    var app = ApplicationFactory.newInstance({
        angularConfig: AngularConfig,
        angularModules: [
            'ngRoute'
        ],
        components: [
            'ui/PomodoroController',
            'ui/NumbersController'
        ]
    });

    return app;

});
