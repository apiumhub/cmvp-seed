/**
 * Created by kevin on 10/27/14.
 */
describe('ViewRepaintAspect', function () {
    var ViewRepaintAspect = app.getService('aspects/ViewRepaintAspect');

    function exerciseCreateView($applyFunction) {
        return {$scope: {$apply: $applyFunction}};
    }

    it("should call the $apply function after running some public method", function () {
        var spy = jasmine.createSpy();
        var view = exerciseCreateView(spy);
        view.publicMethod = function () {};
        ViewRepaintAspect.weave(view);
        view.publicMethod();

        expect(spy).toHaveBeenCalled();
    });

    it("should not call the $apply function after running some private method", function () {
        var spy = jasmine.createSpy();
        var view = exerciseCreateView(spy);
        view._privateMethod = function () {};
        ViewRepaintAspect.weave(view);
        view._privateMethod();

        expect(spy).not.toHaveBeenCalled();
    });
});