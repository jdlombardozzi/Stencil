/*
 * Author: Andrew Krawchyk
 * Date: 8-21-13
 *
 * Simple carousel
 */
;(function ($, window, document, undefined) {
	var pluginName = "gCarousel",
	defaults = {
		images: false,
		activeClass: 'active',
		buttonSelector: 'a',
		indicatorsClass: 'indicators',
		nextClass: 'next',
		prevClass: 'prev'
	};

	// The actual plugin constructor
	function Carousel (element, options) {
		this.element = element;
		this.$element = $(element);
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Carousel.prototype = {
		init: function () {
			// cache jQuery element objects
			this.$image = this.$element.find('img');
			this.$buttons = this.$element.find(this.settings.buttonSelector);
			this.$indicators = this.$element.find('.' + this.settings.indicatorsClass);

			// cache data
			this.images = this.settings.images ? this.settings.images : this.$element.data('images');

			// create indicators for all the images, skip first
			for (var i = 1, l = this.images.length; i < l; i++) {
				this.$indicators.append(this.$indicators.find('li:first-child').clone());
				// var $newIndicator = this.$indicators.find('li:first-child').clone().appendTo(this.$indicators);
				// $newIndicator.find('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			}

			this.current = 0;
			this.$indicators.eq(this.current).addClass('active');

			this.$buttons.on('click', $.proxy(this.buttonClickHandler, this));
			this.$indicators.find('li').on('click', $.proxy(this.indicatorClickHandler, this));
		},
		buttonClickHandler: function (e) {
			e.preventDefault();

			var $clicked = $(e.currentTarget),
			next = $clicked.hasClass(this.settings.nextClass),
			newImage = next ? this.current + 1 : this.current - 1;

			this.updateImage(newImage);
		},
		indicatorClickHandler: function (e) {
			e.preventDefault();

			var $clicked = $(e.currentTarget),
			newImage = $clicked.index();

			this.updateImage(newImage);
		},
		updateButtons: function() {
			this.$buttons.filter('.' + this.settings.prevClass).attr('href', this.images[this.current-1]);
			this.$buttons.filter('.' + this.settings.nextClass).attr('href', this.images[this.current+1]);
		},
		updateImage: function(newImage) {
			if (this.images[newImage]) {
				// TODO load this new image with ajax
				this.current = newImage;
				this.$image[0].src = this.images[this.current];
				this.updateButtons();
				this.updateIndicators();
			}
		},
		updateIndicators: function () {
			this.$indicators.find('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$indicators.find('li').eq(this.current).children(':first-child').addClass(this.settings.activeClass);
		}
	};

	// private functions
	// function cssPercent(left, parentWidth) {
	// 	return (100 * (parseFloat(left) / parseFloat(parentWidth))) + '%';
	// }

	$.fn[pluginName] = function (options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Carousel( this, options) );
			}
		});
	};
})(jQuery, window, document);
