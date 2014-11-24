define(["GameScene", "canvas", "config", "templateImages", "imageManager", "inputs"],
function (GameScene, canvas, config, templateImages, imageManager, inputs) {

	var templateScene = new GameScene ("template");
	var color = "red";
	function changeColor () {
		color = (color == "red" ? "blue" : "red");
	}

	templateScene.init = function (callback) {
		imageManager.pushImages(templateImages);
		callback();
	};

	templateScene.loading = function () {
		if (imageManager.isLoaded()) {
			this._loadCallback();
		}
	};
	templateScene.inputs = function () {
		if (inputs.mouse.buttons.left.pressed) {
			changeColor();
		}
	};

	templateScene.start = function (callback) {
		callback();
	};

	templateScene.render = function () {
		canvas.ctx.fillStyle = "white";
		canvas.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
		canvas.ctx.drawImage(imageManager.get(color), config.canvas.width / 2, config.canvas.height / 2);
	};

	return templateScene;
});