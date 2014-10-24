/**
 * Created by kevin on 10/22/14.
 */

app.registerView(function (container) {
    var MyPresenter = container.getPresenter('presenters/MyPresenter');
    var MyModel = container.getModel('models/MyModel');
    var Configuration = container.getObject('Configuration');

    function MyView($scope, model, presenter) {
        this.data = {};
        this.event = {};
        this.$scope = $scope;

        $scope.data = this.data;
        $scope.event = this.event;

        this.data.loaded = true;
        this.data.currentModel = null;
        this.data.currentError = "";

        this.model = model;
        this.presenter = presenter;
    }

    MyView.prototype.show = function () {
        this.presenter.show(this, this.model);
    };

    MyView.prototype.showModel = function (model) {
        this.data.currentModel = model;
        this.data.currentError = null;
        this.$scope.$apply();
    };

    MyView.prototype.showError = function () {
        this.data.currentModel = null;
        this.data.currentError = "Some error";
        this.$scope.$apply();
    };

    MyView.newInstance = function ($scope, $model, $presenter) {
        var scope = $scope || {};
        var model = $model || MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));
        var presenter = $presenter || MyPresenter.newInstance().getOrElse(throwException("MyPresenter could not be instantiated!!"));

        return Some(new MyView(scope, model, presenter));
    };

    return MyView;
});
