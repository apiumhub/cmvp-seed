/**
 * Created by kevin on 10/27/14.
 */
describe('ViewRepaintAspect', function () {
    var ViewRepaintAspect = app.getService('aspects/ViewRepaintAspect');

    function exerciseCreateView($applyFunction) {
        return {$scope: {$apply: $applyFunction}};
    }

    it("should call the $apply function after running some method", function () {
        var spy = sinon.spy();
        var view = exerciseCreateView(spy);
        view.publicMethod = function () {};
        ViewRepaintAspect.weave(view);
        view.publicMethod();

        expect(spy.called).toBe(true);
    });
});