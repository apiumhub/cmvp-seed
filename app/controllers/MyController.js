/**
 * Created by kevin on 10/22/14.
 */
app.registerController(function(container){
    var MyView = container.getView("views/MyView");

    function MyController($scope, $routeParams) {
        this.view = MyView.newInstance($scope).getOrElse(throwException("Could not create MyView!"));

        if ($routeParams) {
            this.view.data.currentId = $routeParams.modelId;
        } else {
            this.view.data.currentId = 0;
        }

        this.view.show();
    }

    return MyController;
})
