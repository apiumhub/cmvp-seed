/**
 * Created by kevin on 10/24/14.
 */

describe("MyModel", function () {
    var MyModel = app.getModel('models/MyModel');

    it("should return None on odd ids", function () {
        var sut = MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));
    });

    it("should return Some object with it ID", function () {
        var sut = MyModel.newInstance().getOrElse(throwException("MyModel could not be instantiated!!"));
    });
});
