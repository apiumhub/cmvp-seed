/**
 * Created by kevin on 10/27/14.
 */
define(function (require) {
    var ViewRepaintAspect = require('cmvp/aspects/ViewRepaintAspect');
    var TomatoPresenter = require('presenters/TomatoPresenter');

    function TomatoView (di) {
        this.data = {};
        this.event = {};
        this.$scope = di.$scope;

        this.$scope.data = this.data;
        this.$scope.event = this.event;

        this.presenter = di.presenter;
        this.setStatus('default');
    }

    TomatoView.prototype.show = function () {
        this.presenter.show(this);
    };

    TomatoView.prototype.setStatus = function (status) {
        this.data.status = status;
    };

    TomatoView.newInstance = function (di) {
        di = di || {};
        di.$scope = di.$scope || {};
        di.presenter = di.resenter || TomatoPresenter.newInstance();

        var view = new TomatoView(di);
        ViewRepaintAspect.weave(view);
        return view;
    };

    return TomatoView;
});
