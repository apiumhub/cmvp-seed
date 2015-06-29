define(function (require) {
    var GlobalView = require("views/GolbalView");

    function GobalController($scope, $routeParams) {
        this.view = GobalView.newInstance($scope);

        //if ($routeParams) {
        //    this.view.data.currentId = $routeParams.modelId;
        //} else {
        //    this.view.data.currentId = 0;
        //}

        this.view.show();
    }

    return GlobalController;
});
