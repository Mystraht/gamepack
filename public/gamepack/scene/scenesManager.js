define (["GameScene", "config"], function (GameScene, config) {
	var ScenesManager = function () {
		this.scenes = {};
		this.activeScene = new GameScene();
		this.nextScene = "";
		this.paused = false;
	};

	ScenesManager.prototype.addScene = function (name, scene) {
		this.scenes[name] = scene;
		var self = this;
	};

	ScenesManager.prototype.changeScene = function (name, initing, initCallback, loadCallback, params) {
		this.initCallback = initCallback;
		this.loadCallback = loadCallback;
		this.initing = initing;

		this.nextScene = name;

		if (config.debug) {
			console.log("Changing Scene : " + name);
		}
		var self = this;
		this.scenes[name]._changeScene = function (name, params) {
			self.changeScene (name, initing, initCallback, loadCallback, params);
		};
		this.initing();
		this.scenes[name]._init(function () {
			self.onInit();
		}, params);
		this.scenes[name]._loadCallback = function () {
			self.onLoad();
		};
		this.scenes[name]._pause = function () {
			self.paused = true;
			self.onPause();
		};
		this.scenes[name]._resume = function () {
			self.paused = false;
			self.onResume();
		};
		this.scenes[name]._togglePause = function () {
			if (self.paused) {
				self.paused = false;
				self.onResume();
			} else {
				self.paused = true;
				self.onPause();
			}
		};
	};

	ScenesManager.prototype.onInit = function () {
		if (config.debug) {
			console.log ("Scene initialized : " + this.nextScene);
		}
		this.initCallback();
		this.activeScene = this.scenes[this.nextScene];
	};


	ScenesManager.prototype.onLoad = function () {
		var self = this;
		this.activeScene._start ( function () {
			if (config.debug) {
				console.log("scene started : " + self.nextScene);
			}
			self.loadCallback();
		})
	}

	return new ScenesManager();
});
