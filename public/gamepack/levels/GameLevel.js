// Game level class for storing information
define ([], function () {
	var GameLevel = function (infos) {
		this.score = infos.score || 0;
		this.unlocked = infos.unlocked || false;
		this.time = infos.time || 1000;
		this.finished = infos.finished || false;
		this.dlc = infos.dlc || false;
		this.data = infos.data || false;
		this.map = infos.map;
	};

	return GameLevel;
});