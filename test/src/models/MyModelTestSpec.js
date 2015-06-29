/**
 * Created by kevin on 10/24/14.
 */

define(function(require)
{
    describe("MyModel", function () {
        var MyModel = require('models/MyModel');
        var AjaxService = require('cmvp/services/AjaxService');

        function exerciseNewModel(ajaxService) {
            return MyModel.newInstance(ajaxService);
        }

        function exerciseOKAjaxService() {
            var service = new AjaxService();
            var expectedValue = {text: "Some Value"};

            service.ajax = function () { return fakePromise(expectedValue) };
            return { service: service, expectedValue: expectedValue };
        }

        function exerciseFailAjaxService() {
            var service = new AjaxService();
            var expectedValue = "some error";

            service.ajax = function () { return fakePromise(null, expectedValue) };
            return { service: service, expectedValue: expectedValue };
        }

        it("should call the OK callback on a promise when the data exists", function () {
            var ajaxContext = exerciseOKAjaxService();
            var model = exerciseNewModel(ajaxContext.service);

            model.getModelById(0).then(function (value) {
                expect(value).toEqual(ajaxContext.expectedValue);
            });
        });

        it("should call fail callback on a promise when the data does not exist", function () {
            var ajaxContext = exerciseFailAjaxService();
            var model = exerciseNewModel(ajaxContext.service);

            model.getModelById(0).then(function () {}, function (value) {
                expect(value).toEqual(ajaxContext.expectedValue);
            });
        });
    });
})
