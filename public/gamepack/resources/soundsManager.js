define(["howl"], function (howl) {
	var SoundManager = function () {
		howl.Howler.iOSAutoEnable = true;
		this.soundsToLoad = 0;
		this.soundsLoaded = 0;
		console.log(howl);
		this.sounds = {};
		var self = this;
		this.muted = false;
	};
	SoundManager.prototype.init = function (path) {
		this.basePath = path;
	}
	SoundManager.prototype.push = function (obj) {
		
		var self = this;
		this.soundsToLoad += obj.length;
		for (var i = 0; i < obj.length; i++) {
			var o = obj[i];
			this.sounds[o.id] = new howl.Howl({
				urls : [/*this.basePath + o.src + ".mp3", */this.basePath + o.src + ".ogg"],
				autoplay : o.autoplay,
				loop : o.loop,
				volume : o.volume || 1,
				buffer : o.buffer
			});
		}
	};

	SoundManager.prototype.onLoaded = function (evt) {
		console.log("sup");
		this.soundsLoaded++;
	};
	SoundManager.prototype.isLoaded = function () {
		return true;
		if (this.soundsLoaded >= this.soundsToLoad) {
			return true;
		} else {
			return false;
		}
	};
	SoundManager.prototype.mute = function () {
		howl.Howler.mute();
		this.muted = true;
	};
	SoundManager.prototype.unmute = function () {
		howl.Howler.unmute();
		this.muted = false;
	};
	SoundManager.prototype.toggleMute = function () {
		if (this.muted) {
			this.unmute();
		} else {
			this.mute();
		}
	};

	SoundManager.prototype.get = function (id) {
		return this.sounds[id];
	};

	SoundManager.prototype.getPercentage = function () {
		return 1;
		if (this.soundsToLoad == 0) {
			return 1;
		}
		return this.soundsLoaded / this.soundsToLoad;
	};

	return new SoundManager();
});