/**
 * Created by kevin on 10/22/14.
 */
app.registerModel(function (container) {
    function MyModel() {

    }

    MyModel.prototype.getModelById = function (id) {
        if (id == undefined) {
            throw new Error("Validation error!");
        }

        return $.getJSON('http://localhost/json/' + id + ".json");
    };

    MyModel.newInstance = function () {
        return Some(new MyModel());
    };

    return MyModel;
});
