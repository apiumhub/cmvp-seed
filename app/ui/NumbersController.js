define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/NumbersView');
	function NumbersController($scope) {
		BaseController.constructor(this, {$scope: $scope}, View);
	}
    return NumbersController;
});
