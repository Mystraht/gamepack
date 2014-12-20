/*
 * Vector3 class with usual functions
 */
define([], function () {
	var Vector3 = function (x, y, z) {
		if (typeof x == "undefined") x = 0;
		if (typeof y == "undefined") y = 0;
		if (typeof z == "undefined") z = 0;
		this.x = x;
		this.y = y;
		this.z = z;
	}

	Vector3.prototype.add = function (v2) {
		return new Vector3(
			this.x + v2.x,
			this.y + v2.y,
			this.z + v2.z
		);
	};


	Vector3.prototype.sub = function (v2) {
		return new Vector3(
			this.x - v2.x,
			this.y - v2.y,
			this.z - v2.z);
	};


	Vector3.prototype.scale = function (scl) {
		return new Vector3(
			this.x * scl,
			this.y * scl,
			this.z * scl
		);
	};


	Vector3.prototype.distance = function (v2) {
		var v3 = new Vector3(v2.x - this.x, v2.y - this.y, v2.z - this.z);
		return v3.length();
	};


	Vector3.prototype.length = function () {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	};


	Vector3.prototype.normalize = function () {
		var l = this.length();
		return new Vector3(
			this.x / l,
			this.y / l,
			this.z / l
		);
	};


	return Vector3;
});