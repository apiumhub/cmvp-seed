define(function(require) {
    'use strict';
	describe('ui/NumbersView', function() {
		var NumbersView = require('ui/NumbersView');

		function exerciseCreateView() {
			var scope = { $apply: function() {} };
			var view = NumbersView.newInstance({$scope: scope});

			return {scope: scope, view: view};
		}

		function exerciseShowModel(view) {
			view.showModel('some model');
			return 'some model';
		}

		function exerciseShowError(view) {
			view.showError({ responseText: 'some error' });
			return 'some error';
		}

		it('should change the data when showModel is called', function() {
			var context = exerciseCreateView();
			var model = exerciseShowModel(context.view);

			expect(context.scope.data.currentModel).toEqual(model);
		});

		it('should set the error to null when showModel is called', function() {
			var context = exerciseCreateView();
			exerciseShowModel(context.view);

			expect(context.scope.data.currentError).toEqual(null);
		});

		it('should set the data to null when showError is called', function() {
			var context = exerciseCreateView();
			exerciseShowError(context.view);

			expect(context.scope.data.currentModel).toEqual(null);
		});

		it('should set the error to something when showError is called', function() {
			var context = exerciseCreateView();
			var error = exerciseShowError(context.view);

			expect(context.scope.data.currentError).toEqual(error);
		});
	});
});
