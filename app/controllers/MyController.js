/**
 * Created by kevin on 10/22/14.
 */
define(function (require) {
    var MyView = require("views/MyView");

    function MyController($scope, $routeParams) {
        this.view = MyView.newInstance({$scope: $scope});

        if ($routeParams&&$routeParams.modelId) {
            this.view.data.currentId = $routeParams.modelId;
        } else {
            this.view.data.currentId = 0;
        }

        this.view.show();
    }

    return MyController;
});
