/** Main inputs container
- Contains the mouse and keyboard informations
- WIP
**/
define (["Mouse", "KeyboardButtons", "Button", "gamepad", "Wiimote"], 
	function (Mouse, KeyboardButtons, Button, gamepad, Wiimote) {
	var Inputs = function () {
		this.buttons = {};
		this.mouse = new Mouse();
		this.downs = [];
		this.letters = [];
		this.ups = [];
		this.wiimote = new Wiimote();
	};

	Inputs.prototype.reset = function () {
		this.downs = [];
		this.letters = [];
		this.ups = [];
		this.mouse.reset();
		this.buttons = {};
		for (var i in KeyboardButtons) {
			this.buttons[i] = new Button(KeyboardButtons[i]);
		}
	};

	Inputs.prototype.onLetter = function (callback) {
		this.letters.push(callback);
	};
	Inputs.prototype.onKeyDown = function (callback) {
		this.downs.push(callback);
	};
	Inputs.prototype.onKeyUp = function (callback) {
		this.ups.push(callback);
	};
	Inputs.prototype._preInputs = function () {
		gamepad.sample();
		this.wiimote.sample();
	};

	Inputs.prototype._postInputs = function () {
		this.mouse.postInputs();
		for (var i in this.buttons) {
			this.buttons[i].postInputs();
		}
	};

	Inputs.prototype._inputs = function (callback) {

	};
	Inputs.prototype.press = function (key) {
		for (var i in this.buttons) {
			if (typeof key == "object") {
				for (var j = 0; j < key.length; j++) {
					this.buttons[i].press(key[j]);
				}
			} else {
				this.buttons[i].press(key);
			}
		}
	};
	Inputs.prototype.release = function (key) {
		for (var i in this.buttons) {
			if (typeof key == "object") {
				for (var j = 0; j < key.length; j++) {
					this.buttons[i].release(key[j]);
				}
			} else {
				this.buttons[i].release(key);
			}
		}
	}
	Inputs.prototype.init = function (container) {
		var self = this;
		container.on('keydown', function (event) {
			for (var i = 0; i < self.downs.length; i++) {
				self.downs[i](event);
			}
			self.press(event.keyCode)	
		});
		container.on('keyup', function (event) {
			for (var i = 0; i < self.ups.length; i++) {
				self.ups[i](event);
			}
			self.release(event.keyCode);
			
		});
		container.on('keypress', function (event) {
			var letter = String.fromCharCode(event.charCode);
			for (var i = 0; i < self.letters.length; i++) {
				self.letters[i](letter);
			}
		});
		container.on('mousemove', function (event) {
			self.mouse.moveClassic (event);
		});
		this.wiimote.onMove (function (position) {
			self.mouse.move(position.x, position.y);
		});
		container.on('mousedown', function (event) {
			self.mouse.down(event.which, event);
		})
		container.on('mouseup', function (event) {
			self.mouse.up(event.which, event);
		});
		container.on('touchstart', function (event) {
			self.mouse.touchDown(event);
		});
		container.on('touchend', function (event) {
			self.mouse.touchUp(event);
		});
		gamepad.onLS (function (event) {
			if (event == false) {
				self.release([KeyboardButtons.RIGHT, KeyboardButtons.DOWN, KeyboardButtons.UP, KeyboardButtons.LEFT] );
				return;
			}
			var angle = Math.atan2(event.y || 0, event.x || 0);
			if (angle >= Math.radians(-45) && angle <= Math.radians(45)) {
				// right
				self.press(KeyboardButtons.RIGHT);
			} else {
				self.release (KeyboardButtons.RIGHT);
			} 
			if (angle >= Math.radians(45) && angle <= Math.radians(135)) {
				self.press(KeyboardButtons.DOWN);
			} else {
				self.release(KeyboardButtons.DOWN);
			}
			if (angle >= Math.radians(135) || angle <= Math.radians(-135)) {
				self.press(KeyboardButtons.LEFT);
			} else {
				self.release(KeyboardButtons.LEFT);
			}
			if (angle >= Math.radians(-135) && angle <= Math.radians(-45)) {
				self.press(KeyboardButtons.UP);
			} else {
				self.release (KeyboardButtons.UP);
			}
		});
	};

	return new Inputs();
});