define (["Vector2"], function (Vector2) {
	var GameObject = function (infos) {
		this._id = infos._id
		this.position = infos.position || new Vector2(0, 0);
		this.rotation = infos.rotation || 0;
		this.static = infos.static || false;
	};

	GameObject.prototype.addRenderer = function (renderer) {
		this.renderer = renderer;
		this.renderer.position = this.position;
		this.renderer.rotation = this.rotation;
	};
	GameObject.prototype.addCollider = function (collider) {
		this.collider = collider;
	};

	return GameObject;
});