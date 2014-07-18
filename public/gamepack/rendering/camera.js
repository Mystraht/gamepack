define (["Vector2"], function (Vector2) {
	var Camera = function () {

		this.attached = false;
		this.position = new Vector2(0, 0);
		this.offset = new Vector2(-190, 0);
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

	return new Camera();
})