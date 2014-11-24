/* Map loading utility to load json maps */
define (["jquery", "config"], function ($, config) {
	var MapLoader = function () {
		this.baseFolder = config.mapsFolder;
	};

	MapLoader.prototype.load = function (level, callback) {
		console.log(level);
		if (level.data) {
			console.log(level.data);
			console.log(JSON.parse(level.data));
			callback (JSON.parse(level.data));
			return;
		}
		var url;
		if (level.absolute) {
			url = level.map + ".json";
		} else{
			url = this.baseFolder + level.map + ".json";
		}

		$.getJSON(url + "?d=" + Date.now(), function (map) {
			callback (map);
		});
	};

	return new MapLoader();
});