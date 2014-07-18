define (["jquery"], function ($) {
	var Canvas = function () {

	};

	Canvas.prototype.init = function (config) {
		console.log(config);
		this.width = config.width;
		this.height = config.height;
		this.cssWidth = this.width;
		this.cssHeight = this.height;
		
		this.container = $(config.gameContainer);
		this.canvas = $("<canvas />").appendTo (this.container).attr({
			width : config.width,
			height : config.height,
			id : config.canvasId,
			tabIndex : 1
		}).css ({
			position : "absolute"
		});
		this.renderMode = config.renderMode;
		// Used to resize the canvas in CSS, respecting an aspect ratio
		if (this.renderMode == "RATIO_CSS") {
			this.aspectRatio = config.width / config.height;
		}
		this.ctx = this.canvas[0].getContext('2d');
		var self = this;
		$(window).resize (function () {
			self.resize();
		});
		this.resize();
	};

	Canvas.prototype.resize = function () {
		var width = this.container.width();
		var height = this.container.height();

		var newRatio = width / height;

		var newWidth 	= width,
			newHeight 	= height,
			left 		= 0,
			top 		= 0;

		// If the window is too large, reduce the width of the canvas
		if (newRatio > this.aspectRatio) {
			newWidth = Math.floor(height * this.aspectRatio);
			left = Math.floor((width - newWidth) / 2); // Place the canvas at the middle
		} 
		// Else if the window is too long
		else if (newRatio <= this.aspectRatio) {
			newHeight = Math.floor (width / this.aspectRatio);
			top = Math.floor ((height - newHeight) / 2);
		}
		this.canvas.css ({
			width 	: newWidth + 'px',
			height 	: newHeight + 'px',
			left 	: left + 'px',
			top 	: top + 'px'
		});
		this.cssWidth = newWidth;
		this.cssHeight = newHeight;
	};

	return new Canvas();
});