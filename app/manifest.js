/**
 * Created by kevin on 10/22/14.
 */

/** AngularJS App Configuration **/
function AngularConfig($routeProvider) {
    $routeProvider.when("/model/:modelId", {templateUrl: '/templates/main.html', controller: 'MyController'})
        .otherwise({templateUrl: '/templates/main.html', controller: 'MyController'});
}

AngularConfig.$inject = [ '$routeProvider' ];

/** Application Building **/
var app = ApplicationFactory.newRequireApplication("RequireJS")
    .composedWith(ApplicationFactory.newAngularApplication('AngularApp', [ 'ngRoute' ], AngularConfig));

app.manifest = {
    authors: [ 'Apium' ],
    version: 0.1,
    src: [
        'Configuration',
        'services/EventBus',
        'controllers/MyController', 'views/MyView', 'presenters/MyPresenter', 'models/MyModel'
    ]
};

/** Application basic configuration **/
app.registerObject({name: 'SourceList', dependencies: app.manifest.src}, function () {
    return app.manifest.src;
});

app.registerObject({name: "Application", dependencies: ["SourceList"]}, function () {
   return app;
});
