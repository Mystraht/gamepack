/**
	Color class to easily manage color effects
	Takes as parameter an array of rgb (or rgba) colors
**/
define (["lerp"], function (lerp) {
	var Color = function (infos) {
		this.r = infos[0] | 0;
		this.g = infos[1] | 0;
		this.b = infos[2] | 0;
		if (infos.length > 3) {
			this.a = infos[3];
		} else {
			this.a = 1;
		}
	};
	// Lerps between two colors for gradients and other stuff
	Color.interpolate = function (c1, c2, step) {
		return new Color ([
			lerp(c1.r, c2.r, step),
			lerp(c1.g, c2.g, step),
			lerp(c1.b, c2.b, step),
			lerp(c1.a, c2.a, step)
		]);
	};

	return Color;
});