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
	Mouse.prototype.reset = function () {
		this.buttons = {
			left : new MouseButton(),
			right : new MouseButton(),
			middle : new MouseButton()
		};	
	};

	Mouse.prototype.moveClassic = function (evt) {
		var x = evt.pageX;
		var y = evt.pageY;
		this.move(x, y);
		//console.log(x, y);
	};
	Mouse.prototype.moveFinger = function (evt) {
		var x = evt.originalEvent.touches[0].pageX;
		var y = evt.originalEvent.touches[0].pageY;
		this.move(x, y);
	};

	Mouse.prototype.move = function (x, y) {
		var oft = canvas.canvas.offset();
		x -= oft.left;
		y -= oft.top;

		x *= canvas.width / canvas.cssWidth;
		y *= canvas.height / canvas.cssHeight;
		this.position.x = x;
		this.position.y = y;
	};
	Mouse.prototype.down = function (button, evt) {
		var btn = assoc[button];
		this.buttons[btn].press();
	};
	Mouse.prototype.up = function (button, evt) {
		var btn = assoc[button];
		this.buttons[btn].release();
	};
	Mouse.prototype.touchDown = function (evt) {
		this.moveFinger(evt);
		this.buttons.left.press();
	};
	Mouse.prototype.touchUp = function (evt) {
		this.buttons.left.release();
	};
	Mouse.prototype.tap = function () {
		this.buttons["left"].tap();
	};
	
	Mouse.prototype.postInputs = function () {
		for (var i in this.buttons) {
			this.buttons[i].postInputs();
		}
	};

	return Mouse;
});