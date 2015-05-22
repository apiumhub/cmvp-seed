/**
 * Created by kevin on 10/22/14.
 */


define(function() {
    return function main(globalScope) {
        function ApplySEOurls($routeProvider, data) {
            for (var x = 0; x < data.records.length; x++) {
                var route = data.records[x];
                $routeProvider.when("/" + route.keyName, {
                    templateUrl: route.templateUrl,
                    controller: route.controller
                });
            }
        }

        /** AngularJS App Configuration **/
        function AngularConfig($routeProvider, $locationProvider) {

            $locationProvider.html5Mode({
                enabled: false,
                requireBase: true
            });

            $routeProvider
                .when("/model/:modelId", {templateUrl: '/templates/myView.html', controller: 'MyController'})
                .otherwise({templateUrl: '/templates/myView.html', controller: 'MyController'});

            $.get('config/routedata.json', function (data) {
                ApplySEOurls($routeProvider, data);
            });

        }

        AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

        /** Application Building **/
        var app = ApplicationFactory.newRequireApplication("RequireJS")
            .composedWith(ApplicationFactory.newAngularApplication('AngularApp', [ 'ngRoute' ], AngularConfig));

        app.manifest = {
            authors: [ 'apiumtech' ],
            version: 0.1,
            src: [
                'Configuration',
                'services/EventBus', 'services/AjaxService', 'aspects/ViewRepaintAspect',
                'controllers/MyController', 'views/MyView', 'presenters/MyPresenter', 'models/MyModel',
                'controllers/TomatoController', 'views/TomatoView', 'presenters/TomatoPresenter'
            ]
        };

        /** Application basic configuration **/
        app.registerObject({name: 'SourceList', dependencies: app.manifest.src}, function () {
            return app.manifest.src;
        });

        app.registerObject({name: "Application", dependencies: ["SourceList"]}, function () {
            return app;
        });


        app.initialize();
        globalScope.app=app;
        return app;
    }
});
