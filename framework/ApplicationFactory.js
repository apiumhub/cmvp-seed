/**
 * Created by kevin on 10/22/14.
 */

/** An application is a global object that provides decoupled DI to the current JS application
 * delegating the hard work to a defined AMD.
 *
 * You should use by default the require template, just calling the factory method
 * ApplicationFactory.newRequireApplication without parameters.
 *
 * For example:
 *
 * var myApp = ApplicationFactory.newRequireApplication();
 * myApp.registerView('MyView', ['controller/MyController', 'model/MyModelFactory'], function () {
 *  var controller = myApp.requireController('MyController');
 * });
 *
 * Applications are composable: meaning that application logic can be aggregated for using more than
 * one DI container. For example:
 *
 * var myApp = ApplicationFactory.newRequireApplication()
 *                  .composedWith(
 *                          ApplicationFactory.newAngularApplication('AngularApp', [ 'ngRoute' ], AngularConfig)
 *                  );
 **/

;(function (jsScope) {

    jsScope.ApplicationFactory = {
        newApplication: function (name, impl) {
            // ensure that the configuration is valid before creating the application.
            if (impl == null) {
                throw new Error("impl must not be null.");
            }
            ensureFunction(impl.registerObject, "registerObject");
            ensureFunction(impl.getObject, "getObject");

            impl.name = name;
            impl = applySetsTo(impl);
            impl = applyGetsTo(impl);

            impl.isComposedWith = function (type) {
                return impl.type.indexOf(type) != -1;
            };

            impl.composedWith = function (anotherImpl) {
                var x = impl.type + "|" + anotherImpl.type;
                var newImpl = {type: x};

                impl.type = x;
                anotherImpl.type = x;

                newImpl.registerObject = function (cfg, obj) {
                    impl.registerObject(cfg, obj);
                    anotherImpl.registerObject(cfg, obj);
                };

                newImpl.getObject = function (name) {
                    var a = impl.getObject(name);
                    var b = anotherImpl.getObject(name);
                    return a || b;
                };

                newImpl.initialize = function () {
                    impl.initialize();
                    anotherImpl.initialize();
                };

                return ApplicationFactory.newApplication(impl.name + " with " + anotherImpl.name + " ", newImpl);
            };

            return impl;
        },

        newRequireApplication: function (name, config) {
            ensureFunction(jsScope.define);
            ensureFunction(jsScope.require);

            if (config) {
                jsScope.requirejs.config(config);
            }
            var impl = {type: 'require'};
            impl.registerObject = function (configuration, factory) {
                var cfg = configuration || {};
                if (cfg.name != null && cfg.dependencies != null) {
                    jsScope.define(cfg.name, cfg.dependencies, factory);
                } else if (cfg.name != null && cfg.dependencies == null) {
                    jsScope.define(cfg.name, [], function (require) {
                        return factory.bind(require, applyGetsTo({
                            require: require,
                            getObject: require,
                            registerObject: errFun("Parameter is a read-only context")
                        }));
                    });
                } else {
                    jsScope.define(function (require) {
                        return factory.bind(require, applyGetsTo({
                            require: require,
                            getObject: require,
                            registerObject: errFun("Parameter is a read-only context")
                        }));
                    });
                }
            };

            impl.getObject = function (name) {
                try {
                    return jsScope.require(name);
                } catch (e) {
                    console.log(e);
                    return null;
                }
            };

            impl.initialize = function () {
            };

            return jsScope.ApplicationFactory.newApplication(name, impl);
        },

        newAngularApplication: function (name, modules, config) {
            if (jsScope.angular == null) {
                throw new Error("AngularJS is not loaded into the current scope");
            }

            var angularApp = jsScope.angular.module(name, modules);
            angularApp.config(config);

            var impl = {type: 'angular'};

            impl.registerObject = function (configuration, factory) {
                return null;
            };

            impl.getObject = function (objName) {
                return null; // do not use angularjs to detect dependencies
            };

            impl.initialize = function () {
                if (impl.isComposedWith("require")) {
                    jsScope.require(["Application"], function (app) {
                        app.manifest.src.forEach(function (value) {
                            if (value.indexOf("Controller") != -1) {
                                angularApp.controller(value.substring(value.lastIndexOf('/') + 1), ['$scope', '$routeParams', function ($scope, $routeParams) {
                                    var constr = jsScope.require(value);
                                    var constr2 = constr.bind(null, $scope, $routeParams);
                                    var instance = new constr2();
                                    return instance;
                                }]);
                            }
                        });

                        jsScope.angular.bootstrap(document, [name]);
                    });
                } else {
                    jsScope.angular.bootstrap(document, [name]);
                }


            };

            return jsScope.ApplicationFactory.newApplication(name, impl);
        }
    };

    function isFunction(func) {
        return Object.prototype.toString.call(func) == '[object Function]';
    }

    function ensureFunction(func, paramName) {
        if (!isFunction(func)) {
            throw new Error(paramName + " must be a function.");
        }
        return true;
    }

    function errFun(msg) {
        return function () {
            throw new Error(msg)
        };
    }

    function applyGetsTo(obj) {
        var impl = obj || {};

        impl.getFunction = impl.getObject;
        impl.getView = impl.getController = impl.getPresenter = impl.getModel =
            impl.getService = function (name) {
                var x = impl.getObject(name);
                if (!x) {
                    throw new Error("Could not find object: " + name);
                }

                if (isFunction(x)) {
                    return x();
                } else {
                    return x;
                }
            };

        return impl;
    }

    function applySetsTo(obj) {
        var impl = obj || {};

        impl.registerFunction = impl.registerObject;
        impl.registerView = impl.registerController = impl.registerPresenter = impl.registerModel =
            impl.registerService = impl.register = function (cfg, factory) {
                if (factory == null) {
                    ensureFunction(cfg, "factory");
                    impl.registerObject({}, cfg);
                } else {
                    ensureFunction(factory, "factory");
                    impl.registerObject(cfg, factory);
                }
            };

        return impl;
    }

})(window);