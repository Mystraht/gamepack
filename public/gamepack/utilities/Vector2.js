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
	Vector2.add = function (v1, v2) {
		return new Vector2 (
			v1.x + v2.x,
			v1.y + v2.y
		);
	};
	Vector2.sub = function (v1, v2) {
		return new Vector2 (
			v1.x - v2.x,
			v1.y - v2.y
		);
	};
	Vector2.scl = function (v1, scl) {
		return new Vector2(
			v1.x * scl,
			v1.y * scl
		);
	};
	Vector2.length = function (v) {
		return Math.sqrt(v.x * v.x + v.y * v.y);
	};
	Vector2.normalize = function (v) {
		var l = Vector2.length(v);
		return new Vector2(
			v.x / length,
			v.y / length
		);
	};
	
	return Vector2;
});