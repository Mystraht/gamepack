define(["inputs", "canvas", "imageManager", "config", "inputs", "time", "Vector2"], 
function (inputs, canvas, imageManager, config, inputs, time, Vector2) {
	var states = {
		normal : "cursor",
		hand : "cursor_hand",
		closed : "cursor_closed"
	};

	var disappearTime = 1.2;
	var Cursor = function () {
		this.offset = {
			x : config.cursor.x,
			y : config.cursor.y
		};
		this.position = new Vector2(inputs.mouse.position);
		this.lastPosChange = -5;
		this.state = "normal";
		this.previousState = "normal";
	};
	Cursor.prototype.inputs = function () {
		this.lastPosition = new Vector2(this.position);
		this.position = new Vector2(inputs.mouse.position);
		if (this.position.x != this.lastPosition.x || this.position.y != this.lastPosition.y) {
			this.lastPosChange = time.actualTime;
		}

		this.lastState = this.state;
		if (inputs.buttons.A.down || inputs.mouse.buttons.left.down) {
			this.state = "closed";
			this.lastPosChange = time.actualTime;
		} else if (this.state != "hand") {
			this.state = "normal";
		}
		if (this.state != this.lastState) {
			this.lastPosChange = time.actualTime;
		}
		if (inputs.mouse.lastPosChange > this.lastPosChange) this.lastPosChange = inputs.mouse.lastPosChange;
		if (this.lastPosChange > inputs.mouse.lastPosChange) inputs.mouse.lastPosChange = this.lastPosChange;
		if (time.actualTime - this.lastPosChange < disappearTime) {
			this.visible = true;
		} else {
			this.visible = false;
		}
	};

	Cursor.prototype.over = function () {
		this.state = "hand";
	};
	Cursor.prototype.out = function () {
		this.state = "normal";
	};
	Cursor.prototype.render = function () {
		if (time.actualTime - this.lastPosChange < disappearTime) {
			canvas.ctx.drawImage(imageManager.get(states[this.state]), 
				Math.floor(inputs.mouse.position.x - this.offset.x), 
				Math.floor(inputs.mouse.position.y - this.offset.y));
		}
	};

	return new Cursor();
});