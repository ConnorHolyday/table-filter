class TableFilter {

	// pass in the table
	constructor(table) {

		// set defaults
		// all nodes are selected by looking under the passed in table node
		// this prevents cross-contamination
		this.filter = [];
		this.tableFilter = table.querySelectorAll('thead input');
		this.tableContent = table.querySelectorAll('tbody tr');

		// set event listeners
		this.setFilterClicks();

	}

	setFilterClicks() {

		// loop through each item of the filter row
		for ( let cell of this.tableFilter ) {

			// add a click event listener to each
			cell.addEventListener('click', (event) => {

				// get the filter value
				let val = cell.dataset.filter;

				// if the box is checked
				// and the table filter doesn't already contain the value
				// add it from the table filter
				if ( cell.checked && !this.filter.includes(val) ) {
					this.filter.push(val);

				// else if the box isn't checked
				// and the table filter already contains the value
				// remove it from the table filter
				} else if ( !cell.checked && this.filter.includes(val) ) {
					this.filter.splice(this.filter.indexOf(val), 1);
				}

				// then refresh the view
				this.refreshFilter();

			}, false);

		}

	}

	refreshFilter() {

		// loop through each table row
		for ( let row of this.tableContent ) {

			// if there is a filter set
			if ( this.filter.length ) {

				// hide the row
				row.style.display = 'none';

				// loop through the table filter
				for ( let val of this.filter ) {

					// if the row matches the filter
					// display the row
					if ( row.textContent.indexOf(val) !== -1) {
					  row.style.display = 'table-row';
					}

				}

			// otherwise reset all fo the rows
			} else {

				row.style.display = 'table-row';

			}

		}

	}

	clearFilter() {

		// reset the filter
		this.filter = [];

		// reset each table row
		for ( let row of this.tableContent ) {
			row.style.display = 'table-row';
		}

		// uncheck each fiter box
		for ( let cell of this.tableFilter ) {
			cell.checked = false;
		}

	}

}
