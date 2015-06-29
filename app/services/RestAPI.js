/**
 * Created by jose on 10/04/15.
 */
define(function (require) {
    "use strict";
    var Configuration = require('Configuration');
    var AjaxService = require('cmvp/services/AjaxService');

    function RestAPI (di) {
        this.ajaxService = di.ajaxService;
    }

    RestAPI.prototype.getMyModel = function (id) {
        return this.ajaxService.ajax({url: Configuration.api.get_my_model + id + ".json"});
    };

    RestAPI.newInstance = function (di) {
        di = di || {};
        di.ajaxService = di.ajaxService || AjaxService.newInstance();
        return di;
    };

    return RestAPI;
});