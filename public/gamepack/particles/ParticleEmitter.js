define (["Vector2", "Particle", "time", "utils", "Color", "imageManager"], 
	function (Vector2, Particle, time, utils, Color, imgs) {
	var ParticleEmitter = function (infos) {
		this.onScreen = infos.onScreen || false;
		this.position = infos.position;
		this.box = infos.box || new Vector2(1, 1);
		this.velocity = infos.velocity;
		this.spread = infos.spread || Math.PI / 32;
		if (infos.color) {
			this.color = new Color(infos.color);
		} else if (infos.startColor) {
			this.startColor = new Color(infos.startColor);
			this.endColor = new Color(infos.endColor);
			this.color = this.startColor;
		} else {
			this.color = new Color([255, 255, 255, 1]);
		}
		if (infos.scale) {
			this.scale = infos.scale;
		} else if (infos.startScale) {
			this.startScale = infos.startScale;
			this.endScale = infos.endScale;
			this.scale = infos.startScale;
		} else {
			this.scale = 1;
		}
		this.particles = [];
		this.acceleration = infos.acceleration || new Vector2(0, 0);
		this.rate = infos.rate || 2;
		this.maxParticles = infos.maxParticles || 500;
		this.particleSize = infos.particleSize || 1;
		this.minLife = infos.minLife || 1;
		this.maxLife = infos.maxLife || (minLife + 1);
		this.startOpacity = infos.startOpacity || 1;
		this.endOpacity = infos.endOpacity || 0.1;
		this.img = infos.img || false;
		this.prewarm = true;
		this.paused = false;
		if (infos.prewarm === false) {
			this.prewarm = false;
		}
		if (this.prewarm) {
			this.prewarmParticles();
		}
	};

	ParticleEmitter.prototype.prewarmParticles = function () {
		var particlesCount = (60 * this.rate) * this.maxLife;
		for (var i = 0; i < particlesCount; i++) {
			var p = this.emit();
			p.birth = time.actualTime - this.maxLife + (this.maxLife / particlesCount) * i
			p.update(time.actualTime, time.actualTime - p.birth);
		}
	};

	ParticleEmitter.prototype.update = function () {

		if (this.particles.length > this.maxParticles) return;

		if (!this.paused) {
			for (var i = 0; i < this.rate; i++) {
				this.emit();
			}
		}
		var newParticles = [];
		for (var i = 0; i < this.particles.length; i++) {
			var p = this.particles[i];
			if (time.actualTime - p.birth > p.life) continue;
			p.update(time.actualTime, time.actualDeltaTime);
			newParticles.push(p);
		}
		this.particles = newParticles;
	};

	ParticleEmitter.prototype.emit = function () {
		var angle = this.velocity.angle() + this.spread - (Math.random () * this.spread * 2);
		var magnitude = this.velocity.length();
		if (this.box.x != 1 || this.box.y != 1) {
			var position = new Vector2(
				utils.random(-this.box.x / 2, this.box.x / 2), 
				utils.random(-this.box.y / 2, this.box.y / 2));
		} else {
			var position = Vector2.zero();
		}
		var velocity = Vector2.fromAngle(angle, magnitude);

		var p = new Particle({
			position : position,
			velocity : velocity,
			acceleration : this.acceleration,
			life : utils.random(this.minLife, this.maxLife),
			color : this.color,
			scale : this.scale
		});
		if (this.startColor) {
			p.startColor = this.startColor,
			p.endColor = this.endColor
		}
		if (this.startScale) {
			p.startScale = this.startScale;
			p.endScale = this.endScale;
		}
		this.particles.push(p)
		return p;
	};

	ParticleEmitter.prototype.render = function (ctx, drawPos) {
		for (var i = 0; i < this.particles.length; i++) {
			var p = this.particles[i];
			var position = new Vector2(p.position.x + drawPos.x, this.position.y + p.position.y);

			if (this.img) {
				var img = imgs.get(this.img);
				ctx.drawImage(img, 0, 0, img.width, img.height,
					position.x + p.scale / 2, position.y + p.scale / 2, p.scale, p.scale);
			} else {
				ctx.fillStyle = "rgba(" 
					+ p.color.r + ", " 
					+ p.color.g + ", " 
					+ p.color.b + ", " 
					+ p.color.a + ")";
				ctx.fillRect(position.x + p.scale / 2, position.y + p.scale / 2, p.scale, p.scale);
			}
		}
	};

	return ParticleEmitter;	
});