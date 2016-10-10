var assert = require('assert');

describe('Table Filter:', function() {

	describe('unchecking a filter', function() {

		it('should remove value from array', function() {
			var filter = [0, 1, 2, 3];
			var val = 2;

			filter.splice(filter.indexOf(val), 1)

			assert.deepEqual([0, 1, 3], filter);
		});

	});

});
