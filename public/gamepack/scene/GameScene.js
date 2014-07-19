define(["inputs"], function (inputs) {
	var funcs = [
		"preInputs",
		"inputs",
		"preUpdate",
		"update",
		"loading",
		"postUpdate",
		"animate",
		"preRender",
		"render",
		"postRender"
];

	var GameScene = function (name) {
		this.name = name;
		for (var i = 0; i < funcs.length; i++) {
			this["_" + funcs[i]] = createGameSceneFunction (funcs[i]);
		}
	};
	GameScene.prototype._init = function (callback) {
		inputs.reset();
		this.init(callback);
	};
	GameScene.prototype._start = function (callback) {
		this.start(callback);
	}
	GameScene.prototype._postInputs = function () {
		inputs._postInputs();
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
