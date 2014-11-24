define (["canvas", "assetsManager", "config", "loadingBar", "Vector2"], 
function (canvas, assetsManager, config, loadingBar, Vector2) {
	var LoadingScreen = function () {

	};

	LoadingScreen.prototype.render = function () {
		canvas.ctx.fillStyle = "white";
		canvas.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
		loadingBar.render (assetsManager.getPercentage(), canvas.ctx, 
			new Vector2(config.canvas.width /2, config.canvas.height / 2));
	};

	return new LoadingScreen();
});