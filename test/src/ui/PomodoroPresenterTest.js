define(function(require) {
    'use strict';
	describe('ui/PomodoroPresenter', function() {
		var PresenterHelper = require('test-helpers/Presenter');
		var PomodoroView = require('ui/PomodoroView');

        var sut, view, model;
        beforeEach(function() {
            var mvp = PresenterHelper.exerciseCreateMVP(PomodoroView);
            view = mvp.viewStub;
            model = mvp.modelStub;
            sut = mvp.presenter;
        });

        function getSut() { return sut; }
        function getModel() { return model; }
        function getView() { return view; }

		PresenterHelper.testShowSetsValidEvents(getSut, getView, getModel, ['onClickTomato']);

        describe('eventBus:updateTomato', function() {
            it('should call the view', function() {
                view.setStatus = jasmine.createSpy();
                sut.show(view, model);
                sut.di.eventBus.publish({
                    channel: 'TomatoView',
                    topic: 'updateTomato',
                    data: true
                });
                expect(view.setStatus).toHaveBeenCalled();
            });
        });
	});

});
