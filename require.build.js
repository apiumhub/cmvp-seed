requirejs.config({
    "baseUrl" : "app/",
    'out': 'build/seed.min.js',

    'include': [     'Configuration',
        'services/EventBus', 'services/AjaxService', 'aspects/ViewRepaintAspect',
        'controllers/MyController', 'views/MyView', 'presenters/MyPresenter', 'models/MyModel',
        'controllers/TomatoController', 'views/TomatoView', 'presenters/TomatoPresenter']
});