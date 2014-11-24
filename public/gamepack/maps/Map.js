/* Map holder class - Takes a Tiled map editor export */
define (["MapLayer"], function (MapLayer) {
	var Map = function (data) {
		this.layers = {};
		this.height = data.height;
		this.width = data.width;

		this.prepareLayers (data);
	};

	Map.prototype.prepareLayers = function (data) {

		for (var i = 0; i < data.layers.length; i++) {
			var l = data.layers[i];

			this.layers[l.name] = new MapLayer(l);
		}
	}

	return Map;
});