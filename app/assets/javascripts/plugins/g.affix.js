/*
 * Author: Andrew Krawchyk
 * Date: 8-21-13
 *
 * Simple fixed bar
 */

;(function ($, window, document, undefined) {
	var pluginName = "gAffix",
	defaults = {
		rand: Date.now(),
		fixedClass: 'affixed',
		throttled: true,
		throttleMs: 50
	};

	// The actual plugin constructor
	function Affix (element, options) {
		this.element = element;
		this.$element = $(element);
		this.$window = $(window);
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Affix.prototype = {
		init: function () {
			this.scrollTop = this.$window.scrollTop();
			this.position = this.$element.offset();

			this.$window.on('resize.' + this._name + '.' + this.settings.rand, $.proxy(this.checkPosition, this));
			this.$window.on('scroll.' + this._name + '.' + this.settings.rand, $.proxy(this.checkPosition, this));

			console.log('init affix');
		},
		checkPosition: function() {
			clearTimeout(this.timeout);
			this.timeout = setTimeout($.proxy(function() {
				console.log('checking position at ' + Date.now());
				if (!this.$element.is(':visible')) {
					return; // fail fast
				}

				// recalculate offsets in case element was initially hidden
				this.scrollTop = this.$window.scrollTop();
				this.position = this.$element.offset();

				this.$element.toggleClass(this.settings.fixedClass, this.scrollTop >= this.position.top);
			}, this), this.settings.throttled ? this.settings.throttleMs : 0);
		},
		unAffix: function() {
			this.$element.removeClass(this.settings.fixedClass);
			this.$window.off('resize.' + this._name + '.' + this.settings.rand);
			this.$window.off('scroll.' + this._name + '.' + this.settings.rand);
		}
	};

	$.fn[pluginName] = function (option) {
		return this.each(function() {
			var affix = $.data(this, "plugin_" + pluginName),
			options = typeof option === 'object' && option;

			if (!affix) {
				$.data(this, "plugin_" + pluginName, (affix = new Affix(this, options)));
			}

			if (option && typeof option === 'string') {
				affix[option]();
			}
		});
	};
})(jQuery, window, document);
