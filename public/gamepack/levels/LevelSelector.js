/* Level selector helper class for making a level selection screen */

define (["levelsManager", "buttonsManager", "canvas", "config", "canvas", "imageManager", 
	"soundsManager", "guiTemplate", "inputs", "KeyboardButtons"], 
	function (levelsManager, buttonsManager, canvas, config, canvas, imageManager,
		soundsManager, guiTemplate, inputs, KeyboardButtons) {
	var LevelSelector = function (callback) {
		this.lvlCallback = callback;
		this.selectedLvl = 0;
		this.createButtons();
	};
	var c = config.levelSelector;

	// Creates the various level selection buttons
	LevelSelector.prototype.createButtons = function () {
		for (var i = 0; i < levelsManager.levels.length; i++) {
			var l = levelsManager.levels[i];
			var img = "lockedLevel";
			if (l.unlocked) {
				img = "level";
			}
			if (l.finished) {
				img = "finishedLevel";
			}
			buttonsManager.addButton ({
				image : img,
				position : this.gridPosition (i),
				size : {
					x : c.tileSize,
					y : c.tileSize		
				},
				onclick: this.createOnclick (i)
			});
			guiTemplate ({
				mute: true
			});
		}

	};

	/* Keyboard/gamepad navigation in the menu */
	LevelSelector.prototype.inputs = function () {
		var last = this.selectedLvl;
		if (inputs.buttons.LEFT.pressed) {
				this.selectedLvl--;
		} else if (inputs.buttons.RIGHT.pressed) {
			this.selectedLvl++;
		} else if (inputs.buttons.DOWN.pressed) {
			this.selectedLvl += c.grid.x;
		} else if (inputs.buttons.UP.pressed) {
			this.selectedLvl -= c.grid.x;
		} else if (inputs.buttons.SPACE.pressed) {
			this.loadLevel(this.selectedLvl);
		}
		this.selectedLvl = Math.clamp(0, levelsManager.levels.length -1, this.selectedLvl);
		if (this.selectedLvl != last) {
			soundsManager.get("cursor").play();
		}
	};

	LevelSelector.prototype.createOnclick = function (id) {
		var self = this;
		return function () {
			self.loadLevel (id);
		};
	};

	/* Loads a game level */
	LevelSelector.prototype.loadLevel = function (id) {
		if (levelsManager.levels[id].unlocked) {
			this.lvlCallback (id);
		}
	};

	LevelSelector.prototype.gridPosition = function (id) {

		var x = id % c.grid.x;
		var y = Math.floor (id / c.grid.x);
		return {
			x : c.start.x + c.offset.x * x,
			y : c.start.y + c.offset.y * y
		};
	};

	/* Draws the level selector */
	LevelSelector.prototype.postRender = function () {
		if  (c.stars) {
			var s = c.stars;
			for (var i = 0; i < levelsManager.levels.length; i++) {
				var l = levelsManager.levels[i];
				var position = this.gridPosition (i);
				position.x += s.start.x;
				position.y += s.start.y;
				for (var j = 0; j < 3; j++) {
					var image = s.empty;
					if (l.score > j) {
						image = s.full;
					}
					var img = imageManager.get(image);
					canvas.ctx.drawImage(img, 0, 0, img.width, img.height,
						position.x + s.offset * j, position.y, s.size, s.size);
				}
			}
		}
		for (var i = 0; i < levelsManager.levels.length; i++) {
			var l = levelsManager.levels[i];
			var position = this.gridPosition (i);
			if (l.unlocked && !l.finished) {
				canvas.ctx.drawImage(imageManager.get("new"),
					position.x,
					position.y - 20);
			}
			if (this.selectedLvl == i) {
				canvas.ctx.drawImage(imageManager.get("cursor"),
					position.x - 15, 
					position.y + 20);
			}
		}
	};

	return LevelSelector;
});