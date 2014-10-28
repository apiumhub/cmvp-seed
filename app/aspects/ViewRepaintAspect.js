/**
 * Created by kevin on 10/27/14.
 */
app.registerService(function (container) {
    var meld = container.getFunction('meld');

    return {
        weave: function (view) {
            meld.after(view, /^[a-z].+/, function () {
                if (view.$scope.$apply) {
                    if (!view.$scope.$$phase) {
                        view.$scope.$apply();
                    }
                } else {
                    throw new Error("weaved a view that doesn't have the angular $scope");
                }
            });
        }
    };
});