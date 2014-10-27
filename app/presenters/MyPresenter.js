/**
 * Created by kevin on 10/22/14.
 */

app.registerPresenter(function (container) {
    function MyPresenter() {
    }

    MyPresenter.prototype.show = function (view, model) {
        view.event.onLoad = function () {
            model.getModelById(view.data.currentId)
                .then(view.showModel.bind(view), view.showError.bind(view));
        }.bind(this);

        view.event.onChangeModel = function (nextModelId) {
            this.currentId = nextModelId;
            model.getModelById(view.data.currentId)
                .then(view.showModel.bind(view), view.showError.bind(view));
        }.bind(this);
    };

    MyPresenter.newInstance = function () {
        return Some(new MyPresenter());
    };

    return MyPresenter;
});
