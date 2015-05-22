/**
 * Created by kevin on 10/27/14.
 */
define(function (require) {
    var Q = require('q');

    function AjaxService() {

    }

    AjaxService.prototype.ajax = function (params) {
        return Q($.ajax(params));
    };

    return AjaxService;
});