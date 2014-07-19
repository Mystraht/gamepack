define (["time", "config", "canvas", "imageManager", "inputs", "nuggetaInt"], 
function (time, config, canvas, imageManager, inputs, nuggetaInt) {

	// This functions initializes every part of the gamepack before running any user code
	var started = false;
	var initGame = function (callback) {
		if (config.debug) {
			console.log ("Initializing game...");
		}
		canvas.init (config.canvas);
		inputs.init (canvas.container);
		imageManager.init(config.imgFolder);
		initResources (function () {
			if (config.nuggeta) {
				nuggetaInt.init(config.nuggeta, function (response) {
					if (!started) {
						started = true;
						if (response.getStartStatus() == StartStatus.READY) {
							callback();
						} else {
							console.error ("Nuggeta couldn't start !" + response.getStartStatus().toString());
						}
					}
				});
			} else {
				callback();	
			}
		});
	};

	var initResources = function (callback) {
		time.reset();
		callback();
	};

	return initGame;
});