define (["Vector2", "MouseButton", "canvas"], function (Vector2, MouseButton, canvas) {
	var assoc = [
		"",
		"left",
		"middle",
		"right"
	];
	var Mouse = function () {
		this.position = new Vector2(0, 0);
		this.buttons = {
			left : new MouseButton(),
			right : new MouseButton(),
			middle : new MouseButton()
		};
	};

	Mouse.prototype.move = function (evt) {
		var x = evt.pageX;
		var y = evt.pageY;
		var oft = canvas.canvas.offset();
		x -= oft.left;
		y -= oft.top;

		x *= canvas.width / canvas.cssWidth;
		y *= canvas.height / canvas.cssHeight;
		this.position.x = x;
		this.position.y = y;
		//console.log(x, y);
	};

	Mouse.prototype.down = function (button) {
		var btn = assoc[button];
		this.buttons[btn].press();
	};
	Mouse.prototype.postInputs = function () {
		for (var i in this.buttons) {
			this.buttons[i].postInputs();
		}
	};

	return Mouse;
});