/**
 * Created by kevin on 10/27/14.
 */
app.registerService(function (container) {
    var meld = container.getFunction('meld');

    return {
        weave: function (view) {
            meld.after(view, /^[a-z].+/, function () {
                if (view.$scope.$apply) {
                    // ignore the error, it's always an 'already in progress error' which doesn't harm.
                    view.$scope.$apply();
                } else {
                    throw new Error("weaved a view that doesn't have the angular $scope");
                }
            });
        }
    };
});