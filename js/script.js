/* Author:

*/

jQuery(document).ready(function() {
	jQuery("[data-bootstrap-tooltip='left'][title]").tooltip({
		placement: 'left'
	});

	jQuery("[data-bootstrap-tooltip='top'][title]").tooltip({
		placement: 'top'
	});

	jQuery(".carousel").carousel();
});





