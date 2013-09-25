/*
 * Author: Andrew Krawchyk
 * Date: 8-21-13
 *
 * Simple modal
 */
;(function ($, window, document, undefined) {
	var pluginName = "gModal",
	defaults = {
		autoOpen: true,
		closeClass: 'close',
		overlayClass: 'modal-overlay'
	};

	function Modal (element, options) {
		this.element = element;
		this.$element = $(element).clone();
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Modal.prototype = {
		init: function () {
			// remove modal DOM
			$(this.element).remove();
			this.$overlay;
			this.$modal;

			if (this.settings.autoOpen) {
				this.open();
			}
		},
		open: function() {
			this.$overlay = $('<div class="' + this.settings.overlayClass + '"></div>').appendTo('body');
			this.$modal = this.$element.clone().appendTo('body').fadeIn();

			this.$modal.find('.' + this.settings.closeClass).one('click', $.proxy(this.close, this));
		},
		close: function() {
			this.$modal.fadeOut($.proxy(function() {
				this.$modal.remove();
				this.$overlay.remove();
			}, this));
		}
	};

	$.fn[pluginName] = function (option) {
		return this.each(function() {
			var modal = $.data(this, "plugin_" + pluginName),
			options = typeof option === 'object' && option;

			if (!modal) {
				$.data(this, "plugin_" + pluginName, (modal = new Modal(this, options)));
			}

			// methods
			if (option && typeof(option) === 'string') {
				modal[option]();
			}
		});
	};
})(jQuery, window, document);
