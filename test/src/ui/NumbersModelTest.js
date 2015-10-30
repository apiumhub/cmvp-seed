define(function(require) {
    'use strict';
	describe('ui/NumbersModel', function() {
        var NumbersModel = require('ui/NumbersModel');
        var NumbersGateway = require('infra/NumbersGateway');
        var PromiseHelper = require('test-helpers/Promise');

        function exerciseNewModel(numbersGateway) {
            return NumbersModel.newInstance({numbersGateway: numbersGateway});
        }

        function exerciseOKNumbersGateway() {
            var service = new NumbersGateway();
            var expectedValue = {text: 'Some Value'};

            service.getNumberById = function() { return PromiseHelper.fake(expectedValue); };
            return { service: service, expectedValue: expectedValue };
        }

        function exerciseFailNumbersGateway() {
            var service = new NumbersGateway();
            var expectedValue = 'some error';

            service.getNumberById = function() { return PromiseHelper.fake(null, expectedValue); };
            return { service: service, expectedValue: expectedValue };
        }

        it('should call the OK callback on a promise when the data exists', function() {
            var ajaxContext = exerciseOKNumbersGateway();
            var model = exerciseNewModel(ajaxContext.service);

            model.getModelById(0).then(function(value) {
                expect(value).toEqual(ajaxContext.expectedValue);
            });
        });

        it('should call fail callback on a promise when the data does not exist', function() {
            var ajaxContext = exerciseFailNumbersGateway();
            var model = exerciseNewModel(ajaxContext.service);

            model.getModelById(0).then(function() {}, function(value) {
                expect(value).toEqual(ajaxContext.expectedValue);
            });
        });
	});
});
