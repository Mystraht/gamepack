/* Class for creating buttons in the canvas */
define (["imageManager", "inputs", "canvas", "soundsManager", "cursor"], 
	function (imageManager, inputs, canvas, soundsManager, cursor) {
	var CanvasButton = function (infos) {
		this.images = infos.image; // Name of the image of the button
		this.position = infos.position; // Position of the button in the screen
		this.size = infos.size; // Size of the button (vector2)
		this.onclick = infos.onclick; // Callback when button is clicked
		this.onOver = infos.onOver; // Callback when mouse overs the button
		this.onOut = infos.onOut; // Callback when mouse quits the button

		this.rPosition = {
			x : this.position.x - this.size.x / 2,
			y : this.position.y - this.size.y / 2
		};
		this.over = false;
	};

	/* Checks for button press */
	CanvasButton.prototype.inputs = function () {
		var p = inputs.mouse.position;
		if (inputs.mouse.buttons.left.pressed || inputs.buttons.A.pressed) {
			if (p.x >= this.rPosition.x && p.x <= this.rPosition.x + this.size.x
			&& p.y >= this.rPosition.y && p.y <= this.rPosition.y + this.size.y ) {
				this.onclick();
			}
		}
		if (p.x >= this.rPosition.x && p.x <= this.rPosition.x + this.size.x
		&& p.y >= this.rPosition.y && p.y <= this.rPosition.y + this.size.y ) {
			this._onOver();
		} else {
			this._onOut();
		}
	};

	/* button mouseover logic */
	CanvasButton.prototype._onOver = function () {
		if (this.over) return;
		this.over = true;
		if (typeof this.onOver === "function") { 
			this.onOver();
		}
		soundsManager.get('button').play();
		cursor.over();
	};

	/* Button mouseout logic */
	CanvasButton.prototype._onOut = function () {
		if (!this.over) return;
		this.over = false;
		if (typeof this.onOut === "function") { 
			this.onOut();
		}
		cursor.out();
	};

	/* Renders the button */
	CanvasButton.prototype.render = function () {
		var img = this.images;
		if (typeof this.images == "object") {
			if (this.over) {
				img = this.images[1];
			} else {
				img = this.images[0];
			}
		}
		canvas.ctx.drawImage(imageManager.get(img), 
			this.rPosition.x, 
			this.rPosition.y);
	};

	return CanvasButton;
});