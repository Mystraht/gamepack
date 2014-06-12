define ([], function () {
	var Inputs = function () {
		this.downs = [];
		this.letters = [];
		this.ups = [];
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
	Inputs.prototype._inputs = function (callback) {

	};
	Inputs.prototype.init = function (container) {
		console.log(container);
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
	};

	return new Inputs();
});