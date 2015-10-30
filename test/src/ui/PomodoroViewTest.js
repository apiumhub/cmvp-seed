define(function(require) {
    'use strict';
	describe('ui/PomodoroView', function() {
		var PomodoroView = require('ui/PomodoroView');
		var ViewHelper = require('test-helpers/View');

		var sut;
		beforeEach(function() {
			sut = ViewHelper.exerciseCreate(PomodoroView);
		});

		var getSut = function() { return sut; };
		ViewHelper.testShowCallsPresenterShow(getSut);
		ViewHelper.testShowMethodsAreDefined(getSut);

        describe('setStatus', function() {
            describe('always', function() {
                it('should fill sut.data', function() {
                    delete sut.data.status;
					sut.setStatus(true);
                    expect(sut.data.status).toBe(true);
                });
            });
        });
	});
});
