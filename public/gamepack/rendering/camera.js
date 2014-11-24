define (["Vector2", "config"], function (Vector2, config) {
	var Camera = function () {

		this.attached = false;
		this.position = new Vector2(0, 0);
		this.offset = new Vector2(-config.canvas.width / 2, -config.canvas.height / 2);
	};

	Camera.prototype.attach = function (gameObject) {
		if (gameObject !== undefined) {
			this.attached = gameObject;
			this.position = gameObject.position;
		}
	};

	Camera.prototype.update = function () {
		if (this.attached != false) {
			this.position = Vector2.add(this.attached.position, this.offset);
		}
	};

	Camera.prototype.project = function (position) {
		return Vector2.sub (position, this.position);
	};
	Camera.prototype.unproject = function (position) {
		return Vector2.add(position, this.position);
	};

	return new Camera();
})