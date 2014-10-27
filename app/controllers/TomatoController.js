/**
 * Created by kevin on 10/22/14.
 */
app.registerController(function (container) {
    var TomatoView = container.getView("views/TomatoView");

    function TomatoController($scope) {
        this.view = TomatoView.newInstance($scope).getOrElse(throwException("Could not create TomatoView!"));
        this.view.show();
    }

    return TomatoController;
});
