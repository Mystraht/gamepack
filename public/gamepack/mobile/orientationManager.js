/* Orientation change wrapper for mobiles */
define (["jquery"], function ($) {
	var OrientationManager = function () {
		this.orientation = "portrait";
	};

	OrientationManager.prototype.detectOrientation = function (event) {
		var or = event.orientation;
		if (or === undefined) {
			or = window.orientation;
			if (or == 0 || or == 180 || or == undefined) {
				or = "portrait";
			} else {
				or = "landscape";
			}
		}

		this.orientation = or;
		this._cb(this.orientation);
	};
	OrientationManager.prototype.onChange = function (callback) {
		this._cb = callback;
	};

	var orientationManager = new OrientationManager();

	$(window).bind ('orientationchange', function (event) {
		orientationManager.detectOrientation (event);
	});

	return orientationManager;
});