define (["canvas", "Vector2", "imageManager"], 
	function (canvas, Vector2, imageManager) {
	var Graphics = function () {

	};

	Graphics.prototype.renderObject = function (renderer) {
		var image = imageManager.get(renderer.image);
		// First save the canvas
		canvas.ctx.save();
		// Assign properties to the context if there are some specified (fillStyle, etc)
		for (var i in renderer.canvasParam) {
			canvas.ctx[i] = renderer.canvasParam[i];
		}
		// Scales the pivot point with the object scale
		var scaledPivot = Vector2.scl(renderer.pivot, renderer.scale);
		// Gets the drawing center
		var drawPos = renderer.position - scaledPivot;
		canvas.ctx.translate(renderer.position.x, renderer.position.y);
		canvas.ctx.rotate(renderer.rotation);

		canvas.ctx.drawImage(image, 0, 0, renderer.width, renderer.height, -scaledPivot.x, -scaledPivot.y, renderer.width * renderer.scale, renderer.height * renderer.scale);

		canvas.ctx.restore();
	};

	return new Graphics();
});