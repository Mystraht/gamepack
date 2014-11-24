define(["inputs", "canvas", "imageManager", "config", "buttonsManager", "cursor"], 
	function (inputs, canvas, imageManager, config, buttonsManager, cursor) {
	var funcs = [
		"preUpdate",
		"update",
		"loading",
		"postUpdate",
		"animate",
		"preRender",
		"render"
];

	var GameScene = function (name) {
		this.name = name;
		for (var i = 0; i < funcs.length; i++) {
			this["_" + funcs[i]] = createGameSceneFunction (funcs[i]);
		}
	};
	GameScene.prototype._badOrientation = function (orientation) {
		canvas.ctx.drawImage(imageManager.get("rotate" + config.canvas.orientation), 0, 0);
	};
	GameScene.prototype._paused = function () {
		buttonsManager.inputs();
		if (typeof this.paused == "function") {
			this.paused();
		}
	}
	GameScene.prototype._inputs = function () {
		buttonsManager.inputs();
		if (typeof this.inputs === "function") {
			this.inputs();
		}
		cursor.inputs();
	};

	GameScene.prototype._init = function (callback, params) {
		inputs.reset();
		buttonsManager.reset();
		this.init(callback, params);
	};
	GameScene.prototype._start = function (callback) {
		this.start(callback);
	}
	GameScene.prototype._preInputs = function () {
		inputs._preInputs();
	};

	GameScene.prototype._postInputs = function () {
		inputs._postInputs();
	};
	GameScene.prototype._postRender = function () {
		buttonsManager.render();
		if (typeof this.postRender === "function") {
			this.postRender();
		}
		cursor.render();
	};

	// Used to generate all functions (_update, _render, etc)
	// These are meant to be called before the actual user defined ones, so we can add code in them if needed
	var createGameSceneFunction = function (name) {
		return function () {
			if (typeof this[name] === "function") {
				this[name]();
			}
		};
	};

	return GameScene;
});
