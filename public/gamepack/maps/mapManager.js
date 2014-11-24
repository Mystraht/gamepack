/* Map manager, just contains the current map id and map itself, with a method to change map */
define (["mapLoader", "Map"], function (mapLoader, Map) {
	var MapManager = function () {
		this.currentMap = 0;
	};

	/* Load a new map
	* Params: Name of map and callback
	*/
	MapManager.prototype.loadMap = function (level, callback) {
		var self = this;
		mapLoader.load (level, function (map) {
			self.currentMap = level.map;
			self.map = new Map(map);
			callback();
		});
	};

	return new MapManager();
});