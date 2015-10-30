define(function(require) {
    'use strict';
    var PresenterHandlerCreator = require('cmvp/services/PresenterHandlerCreator');
    var EventBus = require('cmvp/services/EventBus');

    function PomodoroPresenter(di) {
        this.di = di;
    }

    PomodoroPresenter.newInstance = function(di) {
        di = di || {};
        di.eventBus = di.eventBus || EventBus.getInstance();
        return new PomodoroPresenter(di);
    };

    PomodoroPresenter.prototype.show = function(view, model) {
        var creator = new PresenterHandlerCreator(this, view, model);
        view.event.onClickTomato = creator.createEventHandler({modelMethod: 'getStatus', viewSuccess: 'setStatus'});

        this.di.eventBus.subscribe({
            channel: 'TomatoView',
            topic: 'updateTomato',
            callback: view.setStatus.bind(view)
        });
    };

    return PomodoroPresenter;
});
