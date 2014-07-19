define (["Vector2"], function (Vector2) {
	var utils = {};

	utils.guid = function () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		    return v.toString(16);
		});
	};

	utils.lerp = function (start, end, step) {
		//return start + (end - start) * step;
		if (step > 1) {
			return end;
		}
		var mu2 = (1 - Math.cos(step * Math.PI)) / 2;
		return (start * (1 - mu2) + end * mu2);
	};

	utils.random = function (min, max) {
		return (Math.random() * (max - min)) + min;
	};
	utils.randInt = function (min, max) {
		return Math.floor(Math.random() * (max-min) + min);
	};
	utils.angleFromDir = function (direction) {
		return Math.atan2(direction.y, direction.x);
	}
	utils.aabb = function (x1, x2, y1, y2, w1, w2, h1, h2) {
		if ( x1 + w1 < x2
			|| x2 + w2 < x1
			|| y1 + h1 < y2
			|| y2 + h2 < y1 ) {

				return false;
			} else {
				return true;
			}
	};
	utils.circleIntersect = function (p1, r1, p2, r2) {
		if (Vector2.distance(p1, p2) <= r1 + r2) {
			return true;
		} else {
			return false;
		}
	};
	
	return utils;
});