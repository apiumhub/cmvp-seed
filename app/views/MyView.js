/**
 * Created by kevin on 10/22/14.
 */

app.registerView(function (container) {
    var EventBus = container.getService('services/EventBus');
    var MyPresenter = container.getPresenter('presenters/MyPresenter');
    var MyModel = container.getModel('models/MyModel');
    var ViewRepaintAspect = container.getService('aspects/ViewRepaintAspect');

    function MyView($scope, model, presenter, eventBus) {
        this.data = {};
        this.event = {};
        this.$scope = $scope;

        $scope.data = this.data;
        $scope.event = this.event;

        this.model = model;
        this.presenter = presenter;
        this.eventBus = eventBus;
    }

    MyView.prototype.show = function () {
        this.presenter.show(this, this.model);
    };

    MyView.prototype.showModel = function (model) {
        this.eventBus.publish({channel: "TomatoView", topic: "updateTomato", data: "green"});
        this.data.currentModel = model;
        this.data.currentError = null;
    };

    MyView.prototype.showError = function (error) {
        this.eventBus.publish({channel: "TomatoView", topic: "updateTomato", data: "red"});
        this.data.currentModel = null;
        this.data.currentError = error.responseText.substr(0, Math.min(error.responseText.length, 128));
    };

    MyView.newInstance = function ($scope, $model, $presenter, $eventBus) {
        var scope = $scope || {};
        var model = $model || MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));
        var presenter = $presenter || MyPresenter.newInstance().getOrElse(throwException("MyPresenter could not be instantiated!!"));
        var eventBus = $eventBus || EventBus.getInstance();

        var view = new MyView(scope, model, presenter, eventBus);

        ViewRepaintAspect.weave(view);
        return Some(view);
    };

    return MyView;
});
