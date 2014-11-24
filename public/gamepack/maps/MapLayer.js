/* Map layer holder class: One of these per map layer - holds the content of the map */
define ([], function () {
	var MapLayer = function (data) {
		this.data = data.data;
		this.height = data.height;
		this.name = data.name;
		this.opacity = data.opacity;
		this.type = data.type;
		this.visible = data.visible;
		this.width = data.width;
		this.x = data.x;
		this.y = data.y;
	};

	MapLayer.prototype.readCase = function (x, y) {
		return this.data[this.getId(x, y)];
	};

	MapLayer.prototype.getPosition = function (id) {
		var y = Math.floor (id / this.width);
		var x = id % this.width;
		return {
			x : x,
			y : y
		};
	};

	MapLayer.prototype.getId = function (x, y) {
		return x + (y * this.width);
	};

	MapLayer.prototype.setCase = function (x, y, value) {
		this.data[this.getId(x, y)] = value;
	};

	return MapLayer;
});