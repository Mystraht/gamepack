define ([], function () {
	var Time = function () {
		this.start = Date.now() / 1000;
		this.time = Date.now() / 1000 - this.start;
		this.actualTime = Date.now() / 1000;
		this.timeScale =  1;
		this.deltaTime = 0;
		this.actualDeltaTime = 0;
		this.lastTime = this.time;
		this.lastActualTime = this.actualTime;
	};

	Time.prototype.pause = function () {
		this.paused = true;
		this.deltaTime = 0;
		this.actualDeltaTime = 0;
		this.lastPause = Date.now() / 1000;
	};
	Time.prototype.resume = function () {
		this.paused = false;
		this.pausedTime = time.time - this.lastPause;
	}

	Time.prototype.preUpdate = function () {
		if (!this.paused) {
			this.lastTime = this.time;
			this.lastActualTime = this.actualTime;
			this.time = Date.now() / 1000 - this.pausedTime - this.start;
			this.actualTime = Date.now() / 1000;
			this.deltaTime = this.time - this.lastTime;
			this.actualDeltaTime = this.actualTime - this.lastActualTime;
		}
	};
	Time.prototype.postUpdate = function () {
		/*this.lastTime = this.time;
		this.time = Date.now() / 1000 - this.start;
*/
	}
	Time.prototype.reset = function () {
		this.start = Date.now() / 1000;
		this.time = 0;
		this.pausedTime = 0;
		this.paused = false;
		this.lastTime = 0;
		this.deltaTime = 0;
	}

	return new Time();
});