define (["GameScene", "config"], function (GameScene, config) {
	var ScenesManager = function () {
		this.scenes = {};
		this.activeScene = new GameScene();
	};

	ScenesManager.prototype.addScene = function (name, scene) {
		this.scenes[name] = scene;
	};

	ScenesManager.prototype.changeScene = function (name, initCallback, loadCallback) {
		if (config.logLvl >= 3) {
			console.log("Changing Scene : " + name);
		}
		var self = this;
		this.scenes[name].init(function () {
			if (config.logLvl >= 3) {
				console.log ("Scene initialized : " + name);
			}
			self.activeScene = self.scenes[name];
			initCallback();
			self.activeScene.start (function () {
				if (config.logLvl >= 3) {
					console.log("Scene started : " + name);
				}
				loadCallback();
			});
		});
	};

	return new ScenesManager();
});
