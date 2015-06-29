/**
 * Created by kevin on 10/22/14.
 */
define(function (require) {
    var TomatoView = require("views/TomatoView");

    function TomatoController($scope) {
        this.view = TomatoView.newInstance($scope);
        this.view.show();
    }

    return TomatoController;
});
