define(function(require) {
    'use strict';
    var PresenterHandlerCreator = require('cmvp/services/PresenterHandlerCreator');
    var EventBus = require('cmvp/services/EventBus');

    function NumbersPresenter(di) {
        this.di = di;
    }

    NumbersPresenter.newInstance = function(di) {
        di = di || {};
        di.eventBus = di.eventBus || EventBus.getInstance();
        return new NumbersPresenter(di);
    };

    NumbersPresenter.prototype.show = function(view, model) {
        var creator = new PresenterHandlerCreator(this, view, model);
        view.event.onLoad = creator.createEventHandler({
            viewDecorator: 'getCurrentId',
            modelMethod: 'getModelById',
            viewSuccess: 'showModel'
        });
        view.event.onChangeModel = creator.createEventHandler({
            viewDecorator: 'getCurrentId',
            modelMethod: 'getModelById',
            viewSuccess: 'showModel'
        });
        view.event.onChangeModel = function() {
            model.getModelById(view.getCurrentId())
                .then(this.publishModelStatus('ok'), this.publishModelStatus('fail'))
                .then(view.showModel.bind(view))
                .catch(view.showError.bind(view));
        }.bind(this);
    };

    NumbersPresenter.prototype.publishModelStatus = function(status) {
        return function(model) {
            this.di.eventBus.publish({channel: 'TomatoView', topic: 'updateTomato', data: status });
            return model;
        }.bind(this);
    };

    return NumbersPresenter;
});
