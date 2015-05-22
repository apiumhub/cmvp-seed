/**
 * Created by kevin on 10/22/14.
 */

define(function (require) {
    var MyPresenter = require('presenters/MyPresenter');
    var MyModel = require('models/MyModel');
    var ViewRepaintAspect = require('aspects/ViewRepaintAspect');

    function MyView($scope, model, presenter) {
        this.data = {};
        this.event = {};
        this.$scope = $scope;

        $scope.data = this.data;
        $scope.event = this.event;

        this.model = model;
        this.presenter = presenter;
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

    MyView.newInstance = function ($scope, $model, $presenter) {
        var scope = $scope || {};
        var model = $model || MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));
        var presenter = $presenter || MyPresenter.newInstance().getOrElse(throwException("MyPresenter could not be instantiated!!"));

        var view = new MyView(scope, model, presenter);

        ViewRepaintAspect.weave(view);
        return Some(view);
    };

    return MyView;
});
