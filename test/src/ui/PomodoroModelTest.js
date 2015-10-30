define(function(require) {
    'use strict';
	describe('ui/PomodoroModel', function() {
		var PomodoroModel = require('ui/PomodoroModel');
		var PromiseHelper = require('test-helpers/Promise');

		var sut;
		beforeEach(function() {
            sut = PomodoroModel.newInstance({Q: PromiseHelper.fake});
		});

		describe('getStatus', function() {
            describe('always', function() {
                it('should return the initial dto', function() {
                    expect(sut.getStatus()).toEqual(undefined);
                });
            });
		});
	});
});
