/* General class for defining game buttons */
define ([], function () {
	var Button = function (keys) {
		this.down = 0; // The button is being held down
		this.lastDown = 0; // Used for internal logic
		this.pressed = 0; // The button has just been pressed at this frame
		this.keys = keys; // List of keys the button is associated with
	};

	Button.prototype.press = function (key) { // Check if this button is pressed
		if (key == this.keys) {
			console.log("Press", key);
			this.down = 1;
			if (this.lastDown == 0) {
				this.pressed = 1;
			}
		}
	};

	Button.prototype.tap = function () {
		this.down = 0;
		this.lastDown = 0;
		this.press();
		this.down = 0;
	};

	Button.prototype.release = function (key) { // Check if this button has been released
		if (key == this.keys && (this.down || this.pressed)) {
			this.down = 0;
			this.pressed = 0;
		}
	}
	// Resets the press state for the next frame
	Button.prototype.postInputs = function () {
		this.pressed = 0;
		this.lastDown = this.down;
	};

	return Button;
});