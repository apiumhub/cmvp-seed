/**
 * Created by apiumdev on 30/10/2015.
 */
define(function(require) {
    'use strict';

    var AjaxService = require('cmvp/services/AjaxService');
    var Configuration = require('Configuration');

    function NumbersGateway(di) {
        this.di = di;
    }

    NumbersGateway.prototype.getNumberById = function(id) {
        return this.di.ajaxService.ok('GET', Configuration.api.numbers + id + '.json');
    };

    NumbersGateway.newInstance = function(di) {
        di = di || {};
        di.ajaxService = di.ajaxService || AjaxService.newInstance();
        return new NumbersGateway(di);
    };

    return NumbersGateway;
});
