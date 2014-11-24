/** Renderer class
- Used by the graphics function to know how to render an object
- WIP
**/
define (["Vector2"], function (Vector2) {
	var Renderer = function (infos) {
		this._id = infos._id || 0;
		this.position = infos.position || new Vector2(0, 0);
		this.rotation = infos.rotation || 0;
		this.pivot 	= infos.pivot 	|| new Vector2(0, 0);
		this.image 	= infos.image 	|| "default";
		this.width 	= infos.width 	|| 1;
		this.height = infos.height 	|| 1;
		this.canvasParam = infos.canvasParam || {};
		this.scale = infos.scale || 1;
	};

	return Renderer;
});