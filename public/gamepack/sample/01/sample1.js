define (["GameScene", "canvas", "config"], function (GameScene, canvas, config) {

	var sampleScene = new GameScene("sample1");
	
	// This is called first and you should launch assets loading there
	sampleScene.init = function (callback) {
		callback();
	};
	// This is always called during loading (before init's callback is called)
	sampleScene.loading = function () {

	};

	// This is called after init's callback, you can initialize gameplay there
	sampleScene.start = function (callback) {
		callback();
	};
	sampleScene.update = function () {

	};
	sampleScene.render = function () {
		// Just some test code
		canvas.ctx.fillStyle = "white";
		canvas.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
		canvas.ctx.fillStyle = "black";
		canvas.ctx.fillRect(20, 20, 20, 20);
	};


	return sampleScene;
});