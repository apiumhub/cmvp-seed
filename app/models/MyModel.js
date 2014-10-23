/**
 * Created by kevin on 10/22/14.
 */
app.registerModel(function (container) {
    function MyModel() {

    }

    MyModel.prototype.getModelById = function (id, callbacks) {
        var value = (id % 2 == 0 && id > 0 ? Some({text: "Model by Id " + id}) : None());
        callbacks.onSuccess(value);
    };

    MyModel.newInstance = function () {
        return Some(new MyModel());
    };

    return MyModel;
});
