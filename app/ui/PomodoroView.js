define(function(require) {
    'use strict';
    var PomodoroPresenter = require('ui/PomodoroPresenter');
    var PomodoroModel = require('ui/PomodoroModel');
    var BaseView = require('cmvp/views/BaseView');

    function PomodoroView(di) {
        BaseView.constructor(this, di);
    }

    PomodoroView.newInstance = function(di) {
        var view = BaseView.newInstance(di, {
            presenter: PomodoroPresenter,
            model: PomodoroModel,
            view: PomodoroView
        });
        return view;
    };

    PomodoroView.prototype.show = BaseView.methods.show;
    PomodoroView.prototype.showError = BaseView.methods.showError;

    PomodoroView.prototype.setStatus = function(status) {
        this.data.status = status;
    };

    return PomodoroView;
});
