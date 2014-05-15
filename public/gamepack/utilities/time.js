define ([], function () {
	var Time = function () {

		this.timeScale = 1; // Time calculations multiplied by that

		this.reset();
	};

	Time.prototype.preUpdate = function () {
		this.lastTime = this.time;
		this.time = Date.now() / 1000 - this.pausedTime - this.start; // Current time minus total paused time
		this.deltaTime = this.time - this.lastTime;
	};

	Time.prototype.postUpdate = function () {
		// Nothing ?
	};

	Time.prototype.pause = function () {
		this.paused = true;
		this.lastPause = Date.now() / 1000;
	};
	Time.prototype.resume = function () {
		this.paused = false;
		// Adds the duration of the pause to the total paused time
		this.pausedTime = time.time - this.lastPause; /
	};

	Time.prototype.reset = function () {
		this.start = Date.now() / 1000;
		this.pausedTime = 0;
		this.paused = false;
		this.time = 0;
		this.lastTime = 0;
		this.deltaTime = 0;
	};

	return new Time();
});