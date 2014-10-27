/**
 * Created by kevin on 10/27/14.
 */
app.registerView(function (container) {
    var ViewRepaintAspect = container.getService('aspects/ViewRepaintAspect');
    var TomatoPresenter = container.getPresenter('presenters/TomatoPresenter');
    var EventBus = container.getService('services/EventBus');

    function TomatoView($scope, $tomatoPresenter, $eventBus) {
        this.data = {};
        this.event = {};
        this.$scope = $scope;

        $scope.data = this.data;
        $scope.event = this.event;

        this.presenter = $tomatoPresenter;

        $eventBus.subscribe({channel: "TomatoView", topic: "updateTomato", callback: function (color) {
            this.setColor(color);
        }.bind(this)});
    }

    TomatoView.prototype.show = function () {
        this.setColor('orange');
        this.presenter.show(this);
    };

    TomatoView.prototype.setColor = function (color) {
        this.data.tomatoStyle = "width: 30px; height: 30px; border-radius: 60px; background-color: " + color;
    };

    TomatoView.newInstance = function ($scope, $tomatoPresenter, $eventBus) {
        var scope = $scope || {};
        var tomatoPresenter = $tomatoPresenter || TomatoPresenter.newInstance().getOrElse(throwException("Could not instantiate TomatoPresenter!!"));
        var eventBus = $eventBus || EventBus.getInstance();

        var view = new TomatoView(scope, tomatoPresenter, eventBus);
        ViewRepaintAspect.weave(view);
        return Some(view);
    };

    return TomatoView;
});
