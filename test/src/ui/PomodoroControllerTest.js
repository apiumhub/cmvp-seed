define(function(require) {
    'use strict';
	describe('ui/PomodoroController', function() {
		var PomodoroController = require('ui/PomodoroController');
		var ControllerHelper = require('test-helpers/Controller');
		ControllerHelper.testCallsViewShow(PomodoroController);
	});
});
