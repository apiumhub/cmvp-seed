/**
 * Created by kevin on 10/27/14.
 */
app.register(function (container) {
    var meld = container.getFunction('meld');

    return {
        weave: function (view) {
            meld.after(view, /^[^_]+/, function () {
                if (view.$scope.$apply) {
                    view.$scope.$apply();
                } else {
                    throw new Error("weaved a view that doesn't has the angular $scope");
                }
            });
        }
    };
});