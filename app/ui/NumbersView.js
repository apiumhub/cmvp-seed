define(function(require) {
    'use strict';
    var NumbersPresenter = require('ui/NumbersPresenter');
    var NumbersModel = require('ui/NumbersModel');
    var BaseView = require('cmvp/views/BaseView');

    function NumbersView(di) {
        BaseView.constructor(this, di);
        var me = this;
        me.fn.onChangeModel = function(id) {
            me.data.currentId = id;
            me.event.onChangeModel();
        };
        this.data.currentId = '';
    }

    NumbersView.newInstance = function(di) {
        var view = BaseView.newInstance(di, {
            presenter: NumbersPresenter,
            model: NumbersModel,
            view: NumbersView
        });
        return view;
    };

    NumbersView.prototype.show = BaseView.methods.show;
    NumbersView.prototype.showError = function(error) {
        this.data.currentModel = null;
        this.data.currentError = error.responseText.substr(0, Math.min(error.responseText.length, 128));
    };

    NumbersView.prototype.showModel = function(model) {
        this.data.currentModel = model;
        this.data.currentError = null;
    };

    NumbersView.prototype.getCurrentId = function() {
        return this.data.currentId;
    };

    return NumbersView;
});
