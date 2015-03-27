app.registerController(function (container) {
    var GlobalView = container.getView("views/GolbalView");

    function GobalController($scope, $routeParams) {
        this.view = GobalView.newInstance($scope).getOrElse(throwException("Could not create GobalView!"));

        //if ($routeParams) {
        //    this.view.data.currentId = $routeParams.modelId;
        //} else {
        //    this.view.data.currentId = 0;
        //}

        this.view.show();
    }

    return GlobalController;
});
