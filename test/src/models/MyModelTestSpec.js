/**
 * Created by kevin on 10/24/14.
 */

define(function (require) {
    describe("MyModel", function () {
        var MyModel = require('models/MyModel');
        var RestAPI = require('services/RestAPI');

        var Promise = require("test-helpers/Promise");

        function exerciseNewModel(restAPI) {
            return MyModel.newInstance({restAPI: restAPI});
        }

        function exerciseOKRestAPI() {
            var service = RestAPI.newInstance();
            var expectedValue = {text: "Some Value"};

            service.getMyModel = function () { return Promise.fake(expectedValue) };
            return { service: service, expectedValue: expectedValue };
        }

        function exerciseFailRestAPI() {
            var service = RestAPI.newInstance();
            var expectedValue = "some error";

            service.getMyModel = function () { return Promise.fake(null, expectedValue) };
            return { service: service, expectedValue: expectedValue };
        }

        it("should call the OK callback on a promise when the data exists", function () {
            var ajaxContext = exerciseOKRestAPI();
            var model = exerciseNewModel(ajaxContext.service);

            model.getModelById(0).then(function (value) {
                expect(value).toEqual(ajaxContext.expectedValue);
            });
        });

        it("should call fail callback on a promise when the data does not exist", function () {
            var ajaxContext = exerciseFailRestAPI();
            var model = exerciseNewModel(ajaxContext.service);

            model.getModelById(0).then(function () {}, function (value) {
                expect(value).toEqual(ajaxContext.expectedValue);
            });
        });
    });
});
