define (["rAnimFrame", "GameStates", "Stats", "config", "rAnimFrame", "scenesManager"],
function (rAnimFrame, GameStates, Stats, config, rAnimFrame, scenesManager) {

	// Creates a FPS visualizer
	if (config.debug) {
		var stats = new Stats();
		stats.setMode(0);
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';
		document.body.appendChild(stats.domElement);
	}

	// State of the gameloop changing depending on what happens

	var state = GameStates.STOPPED;
	function loop () {
		time.preUpdate();
		if (config.debug) {
			stats.begin();
		}
		// Main gameloop
		if (state === GameStates.RUNNING) {
			inputs();
			network();
			update();
			render();
		}
		if (config.debug) {
			stats.end();
		}
		time.postUpdate();
		rAnimFrame(loop);
	}
	function changeScene (scene) {
		scenesManager.changeScene(scene, onInit, onLoad);
	}
	function onInit () {
		state = GameStates.LOADING;
	}
	function onLoad () {
		state = GameStates.RUNNING;
	}

	function init (configParams) {
		config.init(configParams);
		
		initGame (function () {
			loop();
			changeScene (config.startScene);
		});
	}
	return {
		init : init
	};
});
