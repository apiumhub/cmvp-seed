define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/PomodoroView');
	function PomodoroController($scope) {
		BaseController.constructor(this, {$scope: $scope}, View);
	}
    return PomodoroController;
});
