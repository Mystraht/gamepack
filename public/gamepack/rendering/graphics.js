define (["canvas", "Vector2", "imageManager", "camera"],
	function (canvas, Vector2, imageManager, camera) {
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
		canvas.ctx.translate(renderer.position.x + scaledPivot.x, renderer.position.y + scaledPivot.y);
		canvas.ctx.rotate(renderer.rotation);

		canvas.ctx.drawImage(image, 0, 0, renderer.width, renderer.height, -scaledPivot.x, -scaledPivot.y, renderer.width * renderer.scale, renderer.height * renderer.scale);
		canvas.ctx.restore();
	};

	Graphics.prototype.renderTile = function (tileset, tilesetCase, position, params) {
		
		position = {
			x : Math.floor(position.x * tileset.caseSize),
			y : Math.floor(position.y * tileset.caseSize)
		};
		position = camera.project(position);

		if (params.y) {
			position.y += params.y;
		}
		if (params.x) {
			position.x += params.x;
		}
		
		var x = Math.floor(tilesetCase.x * tileset.caseSize);
		var y = Math.floor(tilesetCase.y * tileset.caseSize);

		canvas.ctx.drawImage(imageManager.get(tileset.imageName),
			x, y, tileset.caseSize, tileset.caseSize,
			position.x, position.y, tileset.caseSize, tileset.caseSize);
	};

	return new Graphics();
});