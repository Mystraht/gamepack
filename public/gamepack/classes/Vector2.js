/** Vector2 class with usual functions **/
define ([], function () {
	var Vector2 = function (x, y) {
		if (typeof y === "undefined") {
			this.x = x.x;
			this.y = x.y;
		} else if (typeof x !== "undefined") {
			this.x = x;
			this.y = y;
		} else {
			this.x = 0;
			this.y = 0;
		}
	};
	// Distance between two vectors
	Vector2.distance = function (v1, v2) {
		var v3 = new Vector2(v2.x - v1.x, v2.y - v1.y);
		return v3.length();
	};
	
	// Adds two vectors, return the result
	Vector2.add = function (v1, v2) {
		return new Vector2 (
			v1.x + v2.x,
			v1.y + v2.y
		);
	};

	Vector2.prototype.add = function (v2) {
		return new Vector2(
			this.x + v2.x,
			this.y + v2.y
		);
	};
	
	Vector2.sub = function (v1, v2) {
		return new Vector2 (
			v1.x - v2.x,
			v1.y - v2.y
		);
	};
	Vector2.prototype.sub = function (v2) {
		return new Vector2(
			this.x - v2.x,
			this.y - v2.y);
	};
	Vector2.scl = function (v1, scl) {
		return new Vector2(
			v1.x * scl,
			v1.y * scl
		);
	};
	Vector2.prototype.scale = function (scl) {
		return new Vector2(
			this.x * scl,
			this.y * scl
		);
	};

	// Returns the magnitude of a vector
	Vector2.length = function (v) {
		return Math.sqrt(v.x * v.x + v.y * v.y);
	};
	Vector2.prototype.length = function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	// Returns a normalized vector (magnitude of 1)
	Vector2.normalize = function (v) {
		var l = Vector2.length(v);
		return new Vector2(
			v.x / length,
			v.y / length
		);
	};
	
	Vector2.prototype.normalize = function () {
		var l = this.length();
		return new Vector2(
			this.x / l,
			this.y / l
		);
	};
	return Vector2;
});