define (["GameScene", "config"], function (GameScene, config) {
	var ScenesManager = function () {
		this.scenes = {};
		this.activeScene = new GameScene();
		this.nextScene = "";
	};

	ScenesManager.prototype.addScene = function (name, scene) {
		this.scenes[name] = scene;
	};

	ScenesManager.prototype.changeScene = function (name, initCallback, loadCallback) {
		this.initCallback = initCallback;
		this.loadCallback = loadCallback;

		this.nextScene = name;

		if (config.logLvl >= 3) {
			console.log("Changing Scene : " + name);
		}
		var self = this;
		this.scenes[name].init(function () {
			self.onInit();
		});
		this.scenes[name]._loadCallback = function () {
			self.onLoad();
		};
	};

	ScenesManager.prototype.onInit = function () {
		if (config.logLvl >= 3) {
			console.log ("Scene initialized : " + this.nextScene);
		}
		this.activeScene = this.scenes[this.nextScene];
		this.initCallback();
	};


	ScenesManager.prototype.onLoad = function () {
		var self = this;
		this.activeScene.start ( function () {
			if (config.logLvl >= 3) {
				console.log("scene started : " + self.nextScene);
			}
			self.loadCallback();
		})
	}

	return new ScenesManager();
});
