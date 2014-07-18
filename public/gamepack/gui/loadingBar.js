define ([], function () {
	var LoadingBar = function () {
		this.width = 100;
		this.height = 30;
		this.bgColor = "black";
		this.overlayColor = "rgba(50, 50, 250, 0.5)";
	};

	LoadingBar.prototype.render = function (percent, ctx, position) {
		var start = {
			x : position.x - this.width / 2,
			y : position.y - this.height / 2
		};
		ctx.fillStyle = this.bgColor;
		ctx.fillRect(start.x, start.y, this.width, this.height);
		ctx.fillStyle = this.overlayColor;
		var end = this.width * percent;
		ctx.fillRect(start.x + 1, start.y + 1, end, this.height - 1);
	};

	return new LoadingBar();
});