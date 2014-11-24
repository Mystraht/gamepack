define (["time", "config", "canvas", "imageManager", "inputs", "nuggetaInt",
	"kongregateInt", "gamepackImages", "assetsManager"],
function (time, config, canvas, imageManager, inputs, nuggetaInt,
	kongregateInt, gamepackImages, assetsManager) {

	// This functions initializes every part of the gamepack before running any user code
	var started = false;

	var initGame = function (callback1, callback2) {
		if (config.debug) {
			console.log ("Initializing game...");
		}
		window.scrollTo(0, 1);
		canvas.init (config.canvas);
		inputs.init ($(window));
		callback1();
		initResources (function () {
			initNuggeta (function () {
				initKongregate (function () {
					callback2();
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
		assetsManager.push(gamepackImages, "image");
		var interval = setInterval (function () {
			if (assetsManager.isLoaded()) {
				time.reset();
				callback();
				clearInterval (interval);
			}
		}, 50);
	};

	return initGame;
});