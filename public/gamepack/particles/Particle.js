define(["Vector2", "time", "lerp", "Color"], 
	function (Vector2, time, lerp, Color) {
	var Particle = function (infos) {
		this.position = infos.position || new Vector2(0, 0);
		this.velocity = infos.velocity || new Vector2(0, 0);
		this.acceleration = infos.acceleration || new Vector2(0, 0);
		this.life = infos.life || 1;
		this.birth = time.actualTime;
		this.color = infos.color;
		this.currentStep = 0; // Fraction of the life of the particle
		this.scale = infos.scale || 1;
	};

	Particle.prototype.update = function (newTime, delta) {
		this.velocity.add(Vector2.scale(this.acceleration, delta));
		this.position.add(Vector2.scale(this.velocity, delta));
		this.currentStep = (newTime- this.birth) / this.life;

		if (this.startColor) {
			this.color = Color.interpolate(this.startColor, this.endColor, this.currentStep);
		}
		if (this.startScale) {
			this.scale = lerp(this.startScale, this.endScale, this.currentStep);
		}
	};

	return Particle;
});