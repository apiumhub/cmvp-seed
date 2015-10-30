define(function(require) {
    'use strict';

    var NumbersGateway = require('infra/NumbersGateway');

    function Numbers(di) {
        this.di = di;
    }

    Numbers.prototype.getModelById = function(id) {
        if (id === undefined) {
            throw new Error('Validation error!');
        }

        return this.di.numbersGateway.getNumberById(id);
    };

    Numbers.newInstance = function(di) {
        di = di || {};
        di.numbersGateway = di.numbersGateway || NumbersGateway.newInstance(di);
        return new Numbers(di);
    };

    return Numbers;
});
