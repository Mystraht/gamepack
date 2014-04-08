define (["rAnimFrame", "GameStates"],
function (rAnimFrame, GameStates) {

	var state = GameStates.STOPPED;
	function loop () {

		if (state === GameStates.RUNNING) {
			inputs();
			network();
			update();
			render();
		}
		rAnimFrame(loop);
	}
	function inputs () {

	}
	function network () {

	}
	function update () {

	}
	function render () {

	}

	function init () {
		loop();
		state = GameStates.RUNNING;
	}
	return {
		init : init
	};
});
