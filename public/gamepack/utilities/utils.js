define ([], function () {
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
	return utils;
});