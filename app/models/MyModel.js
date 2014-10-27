/**
 * Created by kevin on 10/22/14.
 */
app.registerModel(function (container) {
    var AjaxService = container.getService('services/AjaxService');

    function MyModel($ajaxService) {
        this.$ajaxService = $ajaxService;
    }

    MyModel.prototype.getModelById = function (id) {
        if (id == undefined) {
            throw new Error("Validation error!");
        }

        return this.$ajaxService.ajax({url: "http://localhost/json/" + id + ".json"});
    };

    MyModel.newInstance = function (ajax) {
        var ajaxService = ajax || AjaxService;
        return Some(new MyModel(ajaxService));
    };

    return MyModel;
});
