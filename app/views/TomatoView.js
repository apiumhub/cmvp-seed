/**
 * Created by kevin on 10/27/14.
 */
define(function (require) {
    var ViewRepaintAspect = require('aspects/ViewRepaintAspect');
    var TomatoPresenter = require('presenters/TomatoPresenter');

    function TomatoView($scope, $tomatoPresenter) {
        this.data = {};
        this.event = {};
        this.$scope = $scope;

        $scope.data = this.data;
        $scope.event = this.event;

        this.presenter = $tomatoPresenter;
        this.setStatus('default');
    }

    TomatoView.prototype.show = function () {
        this.presenter.show(this);
    };

    TomatoView.prototype.setStatus = function (status) {
        this.data.status = status;
    };

    TomatoView.newInstance = function ($scope, $tomatoPresenter) {
        var scope = $scope || {};
        var tomatoPresenter = $tomatoPresenter || TomatoPresenter.newInstance().getOrElse(throwException("Could not instantiate TomatoPresenter!!"));

        var view = new TomatoView(scope, tomatoPresenter);
        ViewRepaintAspect.weave(view);
        return Some(view);
    };

    return TomatoView;
});
