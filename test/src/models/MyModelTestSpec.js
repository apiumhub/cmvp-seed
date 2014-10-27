/**
 * Created by kevin on 10/24/14.
 */

describe("MyModel", function () {
    var MyModel = app.getModel('models/MyModel');

    function exerciseNewModel(ajaxService) {
        return MyModel.newInstance(ajaxService).getOrElse(throwException("Could not create MyModel!!!"));
    }

    function exerciseOKAjaxService() {
        var service = { ajax: function () {} };
        var expectedValue = {text: "Some Value"};

        var serviceMock = sinon.mock(service);
        serviceMock.expects("ajax").returns(fakePromise(expectedValue));

        return { service: service, expectedValue: expectedValue };
    }

    function exerciseFailAjaxService() {
        var service = { ajax: function () {} };
        var expectedValue = "some error";

        var serviceMock = sinon.mock(service);
        serviceMock.expects("ajax").returns(fakePromise(null, expectedValue));

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
