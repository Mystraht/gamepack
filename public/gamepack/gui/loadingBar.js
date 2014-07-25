define (["config"], function (config) {
	var LoadingBar = function () {
		this.width = config.loadingBar.width;
		this.height = config.loadingBar.height;
		this.bgColor = config.loadingBar.bgColor;
		this.overlayColor = config.loadingBar.overlayColor;
		this.font = config.loadingBar.font;
		this.txtColor = config.loadingBar.txtColor;
	};

	LoadingBar.prototype.render = function (percent, ctx, position) {
		ctx.font = this.font;
		var start = {
			x : position.x - this.width / 2,
			y : position.y - this.height / 2
		};
		//console.log(percent, position, start);
		ctx.fillStyle = this.bgColor;
		ctx.fillRect(start.x, start.y, this.width, this.height);
		ctx.fillStyle = this.overlayColor;
		var end = this.width * percent;
		ctx.fillRect(start.x + 1, start.y + 1, end, this.height - 1);
		ctx.fillStyle = this.txtColor;
		ctx.fillText ("Loading...", start.x, start.y - 25);
	};

	return new LoadingBar();
});