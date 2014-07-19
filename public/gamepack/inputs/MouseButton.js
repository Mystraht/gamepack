define ([], function () {
	var MouseButton = function () {
		this.down = 0;
		this.lastDown = 0;
		this.pressed = 0;
	};

	MouseButton.prototype.press = function () {
		this.down = 1;
		if (this.lastDown == 0) {
			this.pressed = 1;
		}
	};

	MouseButton.prototype.tap = function () {
		this.down = 0;
		this.lastDown = 0;
		this.press();
		this.down = 0;
	};

	MouseButton.prototype.release = function () {
		this.down = 0;
		this.pressed = 0;
	}
	MouseButton.prototype.postInputs = function () {
		this.pressed = 0;
		this.lastDown = this.down;
	};

	return MouseButton;
});