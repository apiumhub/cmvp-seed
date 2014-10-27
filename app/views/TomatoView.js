/**
 * Created by kevin on 10/27/14.
 */
app.registerView(function (container) {
    var ViewRepaintAspect = container.getService('aspects/ViewRepaintAspect');
    var EventBus = container.getService('services/EventBus');

    function TomatoView($scope, $eventBus) {
        this.data = {};
        this.event = {};
        this.$scope = $scope;

        $scope.data = this.data;
        $scope.event = this.event;

        $eventBus.subscribe({channel: "TomatoView", topic: "updateTomato", callback: function (color) {
            this.setColor(color);
        }.bind(this)});
    }

    TomatoView.prototype.show = function () {
        this.setColor('orange');
    };

    TomatoView.prototype.setColor = function (color) {
        this.data.tomatoStyle = "width: 30px; height: 30px; border-radius: 60px; background-color: " + color;
    };

    TomatoView.newInstance = function ($scope, $eventBus) {
        var view = new TomatoView($scope || {}, $eventBus || EventBus.getInstance());
        ViewRepaintAspect.weave(view);
        return Some(view);
    };

    return TomatoView;
});
