define(function(require) {
    'use strict';
	describe('ui/NumbersPresenter', function() {

        var PresenterHelper = require('test-helpers/Presenter');
        var NumbersView = require('ui/NumbersView');
        var PromiseHelper = require('test-helpers/Promise');

        var sut, view, model;
        beforeEach(function() {
            var mvp = PresenterHelper.exerciseCreateMVP(NumbersView);
            view = mvp.viewStub;
            model = mvp.modelStub;
            sut = mvp.presenter;
        });

        function getSut() { return sut; }
        function getModel() { return model; }
        function getView() { return view; }

        PresenterHelper.testShowSetsValidEvents(getSut, getView, getModel, ['onLoad', 'onChangeModel']);

        function exerciseCreateValidPresenter() {
            var showModelSpy = view.showModel = jasmine.createSpy('showModel');
            var showErrorSpy = view.showError = jasmine.createSpy('showError');

            model.getModelById = function() {
                return PromiseHelper.fake({text: 'Some Text'}, null);
            };

            sut.show(view, model);
            return {
                showModelSpy: showModelSpy,
                showErrorSpy: showErrorSpy,
                view: view
            };
        }

        function exerciseOnChangeModel(onView) {
            onView.fn.onChangeModel(1);
        }

        it('should call showModel when getModelById returns a valid value', function() {
            var context = exerciseCreateValidPresenter();
            exerciseOnChangeModel(context.view);

            expect(context.showModelSpy).toHaveBeenCalledWith({text: 'Some Text'});
        });

        it('should call showError when getModelById throws an error', function() {
            var context = exerciseCreateValidPresenter();
            exerciseOnChangeModel(context.view);

            expect(context.showErrorSpy).not.toHaveBeenCalled();
        });
	});

});
