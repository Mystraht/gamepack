define (["config"], function (config) {
	var Scores = function () {

	};

	Scores.prototype.submit = function (value, leaderboardID) {
		if (config.api.nuggeta.use) {
			var scr = new NScore();
			scr.setValue (value);
			nuggetaPlug.submitScoreRequest(value, leaderboardID, function (){});
		}
		if (config.api.kongregate.use) {
			kongregate.stats.submit(leaderboardID, value);
		}
	};

	return new Scores();
});