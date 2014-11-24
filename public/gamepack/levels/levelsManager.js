/* Levels Manager: Contains all levels and manages their state */
define (["GameLevel", "modernizr", "nex", "aoc"], 
	function (GameLevel, modernizr, nex, aoc) {
	var LevelsManager = function () {
		this.levels = [];
	};

	/* Pushes new levels to the manager */
	LevelsManager.prototype.addLevels = function (levels) {
		for (var i = 0; i < levels.length; i++) {
			this.levels[i] = new GameLevel (levels[i]);
		}
		this.readSave();
	};

	/* Nintendo method for dlc loading */
	LevelsManager.prototype.loadDLC = function (callback) {
		var self = this;
		aoc.loadAOC (function (err, res) {
			if (err) {
				callback(err, false);
				return;
			}
			console.log("Levels loaded");
			console.log(res.levels);
			self.addLevels(res.levels);
			callback(null, true);
		});
	};

	/* Read levels saved in localStorage */
	LevelsManager.prototype.readSave = function () {
		if (modernizr.localstorage) {
			for (var i = 0; i < this.levels.length; i++) {
				var lvl = localStorage.getItem("level-" + i)
				if (lvl) {
					var l = JSON.parse(lvl);
					this.levels[i] = new GameLevel ({
						score : l.score,
						time: l.time,
						unlocked : l.unlocked,
						finished : l.finished,
						map : this.levels[i].map,
						dlc : this.levels[i].dlc,
						data: this.levels[i].data
					});
				}
			}
		}
	};
	
	/* Finished a level and saves appropriate stuff */
	LevelsManager.prototype.finishLevel = function (id, score, time) {
		// Logic to check if a save is needed (ie. better score/time in the level)
		if (this.levels[id].time == -1 || score > this.levels[id].score || (score >= this.levels[id].score && time <= this.levels[id].time)) {
			this.levels[id].score = score;
			this.levels[id].time = time;
			var value = "" + score + time;
			/* Posts the score to nintendo */
			nex.postScore ({
				score: value,
				cat: id,
				deleteOld: true
			}, function (err, res) {
				if (err) {
					console.error("Score upload failed: " + err.message, value, id);
					return;
				}
				console.log("Score upload success", value, id);
			});
			/* /nintendo */
		}
		// Unlocks the next level
		if (id + 1< this.levels.length) {
			this.levels[id + 1].unlocked = true;
		}
		this.save();
	};

	// Saves the levels informations to the local storage
	LevelsManager.prototype.save = function () {
		if (modernizr.localstorage) {
			for (var i = 0; i < this.levels.length; i++) {
				localStorage.setItem("level-" + i, JSON.stringify(this.levels[i]));
			}
		}
	};


	return new LevelsManager();
});