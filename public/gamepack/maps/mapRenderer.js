/* Map renderer helper: Draws all tiles in a map using a given tileset */
define (["mapManager", "canvas", "graphics"], function (mapManager, canvas, graphics) {
	var mapRenderer = function () {

	};

	// Main render method, loop through layers to render each one
	mapRenderer.prototype.render = function (tilesets, params) {
		this.params = params;
		var map = mapManager.map;
		for (var i  in map.layers) {
			this.renderMapLayer (map.layers[i], tilesets);
		}
	};

	/* Render one layer of the map */
	mapRenderer.prototype.renderMapLayer = function (layer, tilesets) {
		if (layer.visible) {
			for (var i = 0; i < layer.data.length; i++) {
				var tileset = tilesets.main; // TEMP code : Should find the correct tileset
				var position = layer.getPosition (i);
				var value = layer.data[i];
				this.renderCase (tileset, value, position); // Renders the case
			}
		}
	};
	/* Renders one tile */
	mapRenderer.prototype.renderCase = function (tileset, value, position) {
				if (value !== 0) {
					graphics.renderTile(tileset, {
						x : 2,
						y : 0
					}, position, this.params); // Renders the background case
					// TODO: Optimise to avoid doing this all the time
					// Renders the actual case
					graphics.renderTile (tileset, {
						x : (value - 1) % tileset.width,
						y : Math.floor((value - 1) / tileset.width)
					}, position, this.params);

				}
	};

	return new mapRenderer();
});