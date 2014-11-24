define (["rAnimFrame", "GameStates", "Stats", "config", "rAnimFrame", "scenesManager", 
	"initGame", "time", "jquery", "orientationManager", "loadingScreen", "imageManager"],
function (rAnimFrame, GameStates, Stats, config, rAnimFrame, scenesManager, 
	initGame, time, $, orientationManager, loadingScreen, imageManager) {

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
	var lastState = GameStates.STOPPED
	var orientation = "portrait";
	function loop () {
		if (state != GameStates.BAD_ORIENTATION && orientationManager.orientation != config.canvas.orientation) {
			lastState = state;
			state = GameStates.BAD_ORIENTATION;
		}
		time.preUpdate();
		if (config.debug) {
			stats.begin();
		}
		// Main gameloop
		if (state === GameStates.LOADING_ASSETS) {
			loadingScreen.render();
		}
		if (state === GameStates.RUNNING) {
			scenesManager.activeScene._preInputs();
			scenesManager.activeScene._inputs();
			scenesManager.activeScene._update();
			scenesManager.activeScene._render();
			scenesManager.activeScene._postRender();
		} else if (state == GameStates.LOADING) {
			scenesManager.activeScene._loading();
		} else if (state == GameStates.BAD_ORIENTATION) {
			scenesManager.activeScene._badOrientation(orientation);
		} else if (state == GameStates.PAUSED) {
			scenesManager.activeScene._render();
			scenesManager.activeScene._postRender();
			scenesManager.activeScene._paused();
		}
		scenesManager.activeScene._postInputs();
		if (config.debug) {
			stats.end();
		}
		time.postUpdate();
		rAnimFrame(loop);
	}
	function changeScene (scene) {
		scenesManager.changeScene(scene, initing, onInit, onLoad);
	}
	function initing () {
		state = GameStates.PAUSED;
	}
	function onInit () {
		state = GameStates.LOADING;
	}
	function onLoad () {
		state = GameStates.RUNNING;
	}
	scenesManager.onPause = initing;
	scenesManager.onResume = onLoad;

	function init () {
		
		initGame (function () {
			state = GameStates.LOADING_ASSETS;
			loop();
		}, function () {
			changeScene (config.startScene);
		});
	}

	orientationManager.onChange (function (or) {
		orientation = or;
		if (or != config.canvas.orientation) {
			lastState = state;
			state = GameStates.BAD_ORIENTATION;
			if (config.debug) {
				console.log("BAD ORIENTATION");
			}
		} else {
			state = lastState;
		}
	});
	orientationManager.detectOrientation ({});

	return {
		init : init
	};
});
