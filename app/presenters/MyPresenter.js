/**
 * Created by kevin on 10/22/14.
 */

app.registerPresenter(function (container) {
    var EventBus = container.getService('services/EventBus');

    function MyPresenter($eventBus) {
        this.eventBus = $eventBus;
    }

    MyPresenter.prototype.show = function (view, model) {
        view.event.onLoad = function () {
            model.getModelById(view.data.currentId)
                .then(view.showModel.bind(view), view.showError.bind(view));
        }.bind(this);

        view.event.onChangeModel = function (nextModelId) {
            this.currentId = nextModelId;
            model.getModelById(view.data.currentId)
                .then(this.publishModelStatus("ok"), this.publishModelStatus("fail"))
                .then(view.showModel.bind(view), view.showError.bind(view));
        }.bind(this);
    };

    MyPresenter.prototype.publishModelStatus = function (status) {
        return function (model) {
            this.eventBus.publish({channel: "TomatoView", topic: "updateTomato", data: status });
            return model;
        }.bind(this);
    };

    MyPresenter.newInstance = function ($eventBus) {
        var eventBus =  $eventBus || EventBus.getInstance();
        return Some(new MyPresenter(eventBus));
    };

    return MyPresenter;
});
