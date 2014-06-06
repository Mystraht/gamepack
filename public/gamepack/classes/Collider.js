define (["Vector2"], function (Vector2) {
	var Collider = function (infos) {
		this._id = infos._id;
		this.position = infos.position || new Vector2(0, 0);
		this.rotation = infos.rotation || 0;
		this.pivot = infos.pivot || new Vector2(0, 0);
		this.width = infos.width || 1;
		this.height = infos.height || 1;
	};

	return Collider;
});