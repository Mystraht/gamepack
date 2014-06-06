define (["GameScene", "canvas", "config", "world", "../02/images", "assetsManager", 
	"../02/gameObjects", "imageManager"], 
	function (GameScene, canvas, config, world, images, assetsManager, 
		gameObjects, imageManager) {

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
		for (var i = 0; i < gameObjects.length; i++) {
			var gameObject = gameObjects[i];
			var createdObject = world.createGameObject(gameObject);
			if (gameObject.renderer) {
				var renderer = world.createRenderer(gameObject.renderer);
				createdObject.addRenderer(renderer);
			}
		}
		console.log ("yo");
		console.log(world);
		callback();
	};
	sampleScene.update = function () {

	};
	sampleScene.render = function () {
		canvas.ctx.fillStyle = "white";
		canvas.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
		canvas.ctx.fillStyle = "black";
		canvas.ctx.fillRect(20, 20, 20, 20);
		world.render();
		// Just some test code
	};


	return sampleScene;
});