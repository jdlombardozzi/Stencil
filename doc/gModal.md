### Modal

The modal consists of three parts, a header, some content, and a close button. The overlay is generated automatically when the "open" plugin method is called. On initialization, the plugin removes the initial modal DOM (caching it for later use) so the extra modal markup should not affect the presentation of your site.

It's a good idea to initially create the modal markup where the modal content would make sense within the flow of the document, and styling it appropriately there. This ensures the user will see the modal's content as indentended if they are browsing your site without JavaScript. 

#### Markup

	<div class="modal">
		<div class="modal-header">
			<h3>More about us</h3>
		</div>
		<hr>
		<div class="modal-content">
			<p>
				Content
			</p>
		</div>
		<button type="button" class="close hide-text">close</button>
	</div>
	
#### Usage

	var $modal = $('.modal').gModal({ autoOpen: false });

	$('button.open').on('click', function(e) {
		e.preventDefault();

		$modal.gModal('open');
	});


#### Options

	autoOpen: true
	closeClass: 'close'
	overlayClass: 'modal-overlay'
