define (["Vector2"], function (Vector2) {
	var GameObject = function (infos) {
		this._id = infos._id
		this.position = infos.position || new Vector2(0, 0);
		this.rotation = infos.rotation || 0;
		this.scale = infos.scale || 1;
		this.static = infos.static || false;
	};

	GameObject.prototype.addRenderer = function (renderer) {
		this.renderer = renderer;
		this.renderer.position = this.position;
		this.renderer.rotation = this.rotation;
		this.renderer.scale = this.scale;
	};
	GameObject.prototype.addCollider = function (collider) {
		this.collider = collider;
	};

	GameObject.prototype.setPosition = function (position) {
		this.position = position;
		this.renderer.position = position;
	};
	GameObject.prototype.setRotation = function (rotation) {
		this.rotation = rotation;
		this.renderer.rotation = rotation;
	};
	GameObject.prototype.setScale = function (scale) {
		this.scale = scale;
		this.renderer.scale = scale;
	}
	GameObject.prototype.translate = function (translation) {
		this.setPosition (Vector2.add(this.position, translation));
	};
	GameObject.prototype.rotate = function (rotation) {
		this.setRotation (this.rotation + rotation);
	};

	return GameObject;
});