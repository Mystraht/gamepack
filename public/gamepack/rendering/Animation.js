define (["time", "revDirs"], function (time, revDirs) {
	var Animation = function (infos) {
		this.state = infos.state || 0;
		this.key = infos.key || 0;
		this.direction = infos.direction || 0;
		this.anim = infos.anim;
		this.lastChange = time.time;
		this.pingPong = infos.pingPong || false;
		this.curAnim = this.anim[this.state][revDirs[this.direction]];
		this.wait = false;
	};

	Animation.prototype.update = function () {
		this.curAnim = this.anim[this.state][revDirs[this.direction]];
		var anim = this.curAnim;
		var changeTimer = config.animSpeed;
		if (anim.speed) {
			changeTimer = anim.speed;
		}
		if (time.time - this.lastChange > changeTimer) {
			this.key++;
			this.key %= (this.curAnim.frames ? this.curAnim.frames.length : this.anim.keys);
			if (this.wait && this.key == 0) {
				console.log("nextState");
				this.state = this.nextState;
				this.wait = false;
			}
			this.lastChange = time.time;
		}
	};

	Animation.prototype.read = function () {
		return this.anim[this.state][revDirs[this.direction]];
	};
	Animation.prototype.getCoordinates = function () {
		var x = this.anim.width * this.key;
		if (this.curAnim.frames) {
			x = this.curAnim.frames[this.key] * this.anim.width;
		}
		var y = this.read().y * this.anim.height;
		return {
			x : x,
			y : y,
			width : this.anim.width,
			height : this.anim.height
		};
	};

	Animation.prototype.changeState = function (state, wait, reset) {
		if (wait) {
			this.nextState = state;
			this.wait = true;
		} else {
			if (reset) {
				this.key = 0;
			}
			this.wait = false;
			this.state = state;
		}
	};
	Animation.prototype.changeDirection = function (newDir) {
		this.direction = newDir;
	};
	return Animation;
});