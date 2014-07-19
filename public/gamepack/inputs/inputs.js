define (["Mouse"], function (Mouse) {
	var Inputs = function () {
		this.mouse = new Mouse();
		this.downs = [];
		this.letters = [];
		this.ups = [];
	};

	Inputs.prototype.reset = function () {
		this.downs = [];
		this.letters = [];
		this.ups = [];
		this.mouse.reset();
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
	Inputs.prototype._postInputs = function () {
		this.mouse.postInputs();
	};

	Inputs.prototype._inputs = function (callback) {

	};
	Inputs.prototype.init = function (container) {
		var self = this;
		container.on('keydown', function (event) {
			for (var i = 0; i < self.downs.length; i++) {
				self.downs[i](event);
			}
		});
		container.on('keyup', function (event) {
			for (var i = 0; i < self.ups.length; i++) {
				self.ups[i](event);
			}
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

	};

	return new Inputs();
});