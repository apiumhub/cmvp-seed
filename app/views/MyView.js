/**
 * Created by kevin on 10/22/14.
 */

define(function (require) {
    var MyPresenter = require('presenters/MyPresenter');
    var MyModel = require('models/MyModel');
    var ViewRepaintAspect = require('cmvp/aspects/ViewRepaintAspect');

    function MyView (di) {
        this.data = {};
        this.event = {};
        this.$scope = di.$scope;

        this.$scope.data = this.data;
        this.$scope.event = this.event;

        this.model = di.model;
        this.presenter = di.presenter;
    }

    MyView.prototype.show = function () {
        this.presenter.show(this, this.model);
    };

    MyView.prototype.showModel = function (model) {
        this.data.currentModel = model;
        this.data.currentError = null;
    };

    MyView.prototype.showError = function (error) {
        this.data.currentModel = null;
        this.data.currentError = error.responseText.substr(0, Math.min(error.responseText.length, 128));
    };

    MyView.newInstance = function (di) {
        di = di || {};
        di.$scope = di.$scope || {};
        di.model = di.model || MyModel.newInstance();
        di.presenter = di.presenter || MyPresenter.newInstance();

        var view = new MyView(di);

        ViewRepaintAspect.weave(view);
        return view;
    };

    return MyView;
});
