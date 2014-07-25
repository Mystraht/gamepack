define (["config", "jquery"], 
function (config, $) {
	var Leadbolt = function () {
		this.active = config.api.ads.use;
	};

	Leadbolt.prototype.show = function () {
		if (this.active) {
			$("#ap_iframe").css("visibility", "visible");
		}
	};
	Leadbolt.prototype.hide = function () {
		if (this.active) {
			$("#ap_iframe").css("visibility", "hidden");
		}
	};

	return new Leadbolt();
});