/**
 * Created by kevin on 10/24/14.
 */

describe("MyModel", function () {
    var MyModel = app.getModel('models/MyModel');

    it("should return None on odd ids", function () {
        var sut = MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));

        sut.getModelById(1, {
            onSuccess: function (model) {
                expect(model.isEmpty).toEqual(true);
            }
        });
    });

    it("should return Some object with it ID", function () {
        var sut = MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));

        sut.getModelById(2, {
            onSuccess: function (model) {
                var x = model.getOrElse(throwException("Could not generate a model."));
                expect(x.text).toEqual("Model by Id 2")
            }
        });
    });
});
