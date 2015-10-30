define(function(require) {
    'use strict';
	describe('ui/NumbersController', function() {
		var NumbersController = require('ui/NumbersController');
		var ControllerHelper = require('test-helpers/Controller');
		ControllerHelper.testCallsViewShow(NumbersController);
	});
});
