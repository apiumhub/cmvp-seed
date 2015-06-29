/**
 * Created by kevin on 10/27/14.
 */
define(function(require)
{
    describe("MyPresenter", function () {
        var MyPresenter = require("presenters/MyPresenter").newInstance();
        var Promise = require("test-helpers/Promise");

        function exerciseCreateValidPresenter() {
            var showModelSpy = jasmine.createSpy("showModel");
            var showErrorSpy = jasmine.createSpy("showError");

            var MyView = { event: {}, data: {}, showModel: showModelSpy, showError: showErrorSpy };

            var MyModel = {};
            MyModel.getModelById = function () {
                return Promise.fake({text: "Some Text"}, null);
            };

            MyPresenter.show(MyView, MyModel);
            return {
                showModelSpy: showModelSpy,
                showErrorSpy: showErrorSpy,
                view: MyView
            }
        }

        function exerciseOnChangeModel(onView) {
            onView.event.onChangeModel(1);
        }

        it("should call showModel when getModelById returns a valid value", function () {
            var context = exerciseCreateValidPresenter();
            exerciseOnChangeModel(context.view);

            expect(context.showModelSpy).toHaveBeenCalledWith({text: "Some Text"});
        });

        it("should call showError when getModelById throws an error", function () {
            var context = exerciseCreateValidPresenter();
            exerciseOnChangeModel(context.view);

            expect(context.showErrorSpy).not.toHaveBeenCalled();
        });
    });
});
