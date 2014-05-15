define (["time", "config", "canvas"], 
function (time, config, canvas) {

	// This functions initializes every part of the gamepack before running any user code
	var initGame = function (callback) {
		if (config.logLvl >= 3) {
			console.log ("Initializing game...");
		}
		canvas.init (config.canvas);
		initResources (function () {
			callback();
		});
	};

	var initResources = function (callback) {
		time.reset();
		callback();
	};

	return initGame;
});