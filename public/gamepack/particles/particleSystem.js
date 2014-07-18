define(["Vector2", "ParticleEmitter", "camera"], 
	function (Vector2, ParticleEmitter, camera) {
	var ParticleSystem = function () {
		this.emitters = [];
	};

	ParticleSystem.prototype.addEmitter = function (infos) {
		var emitter = new ParticleEmitter(infos);
		this.emitters.push(emitter);
		return emitter;
	};

	ParticleSystem.prototype.update = function () {
		for (var i = 0; i < this.emitters.length; i++) {
			this.emitters[i].update();
		}
	};

	ParticleSystem.prototype.render = function (ctx) {
		for (var i = 0; i < this.emitters.length; i++) {
			var pos = this.emitters[i].onScreen ?  this.emitters[i].position : camera.project(this.emitters[i].position);
			this.emitters[i].render(ctx, pos);
		}
	};
	return new ParticleSystem();
});