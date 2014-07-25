define (["time", "config", "canvas", "imageManager", "inputs", "nuggetaInt", 
	"kongregateInt"], 
function (time, config, canvas, imageManager, inputs, nuggetaInt,
	kongregateInt) {

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
			initNuggeta (function () {
				initKongregate (function () {
					callback();
				});
			});
		});
	};

	var initNuggeta = function (callback) {
		if (config.api.nuggeta.use) {
			nuggetaInt.init(config.api.nuggeta.apiUrl, function (response) {
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
	};
	var initKongregate = function (callback) {
		if (config.api.kongregate.use) {
			kongregateInt.init (function (response) {
				callback();
			});
		} else {
			callback();
		}
	};

	var initResources = function (callback) {
		time.reset();
		callback();
	};

	return initGame;
});