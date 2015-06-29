/**
 * Created by kevin on 10/22/14.
 */
define(function (require) {
    var AjaxService = require('services/AjaxService');

    function MyModel($ajaxService) {
        this.$ajaxService = $ajaxService;
    }

    MyModel.prototype.getModelById = function (id) {
        if (id == undefined) {
            throw new Error("Validation error!");
        }

        return this.$ajaxService.ajax({url: "/json/" + id + ".json"});
    };

    MyModel.newInstance = function (ajax) {
        var ajaxService = ajax || new AjaxService();
        return new MyModel(ajaxService);
    };

    return MyModel;
});
