define (["GameScene", "canvas", "config", "world", "../learning/images", "assetsManager",
	"../learning/gameObjects", "imageManager", "Vector2", "time", "inputs"],
	function (GameScene, canvas, config, world, images, assetsManager,
		gameObjects, imageManager, Vector2, time, inputs) {

	var sampleScene = new GameScene("sample1");


	// This is called first and you should launch assets loading there
	sampleScene.init = function (callback) {
		self.startCallback = callback;
		// Adds the images to the scene
		imageManager.pushImages(images);
		callback();
	};
	// This is always called during loading (before init's callback is called)
	sampleScene.loading = function () {
		console.log("Loading", assetsManager.isLoaded());
		if (assetsManager.isLoaded()) {
			this._loadCallback();
		}
	};

	// This is called after init's callback, you can initialize gameplay there
	sampleScene.start = function (callback) {
		inputs.onLetter(function (letter) {

		});
		console.log(world);
		callback();
	};
	sampleScene.update = function () {

	};
	sampleScene.render = function () {
		canvas.ctx.fillStyle = "white";
		canvas.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
		world.render();
		// Just some test code
	};


	return sampleScene;
});