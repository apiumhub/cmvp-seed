/**
 * Created by kevin on 10/22/14.
 */
define(function (require) {
    var RestAPI = require('services/RestAPI');

    function MyModel (di) {
        this.restAPI = di.restAPI;
    }

    MyModel.prototype.getModelById = function (id) {
        if (id == undefined) {
            throw new Error("Validation error!");
        }

        return this.restAPI.getMyModel(id);
    };

    MyModel.newInstance = function (di) {
        di = di || {};
        di.restAPI = di.restAPI || RestAPI.newInstance();
        return new MyModel(di);
    };

    return MyModel;
});
