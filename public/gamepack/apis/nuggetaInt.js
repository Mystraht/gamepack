define (["config"], function (config) {
	var NuggetaInt = function () {
		this.started = false;
	};

	NuggetaInt.prototype.init = function (conf, callback) {
		window.nuggetaPlug = new NuggetaPlug().init(conf.url);
		if (config.debug) {
			nuggetaPlug.setPlayerDebugId("d-2fbd4c44-a969-4a1b-88f6-194b662fcd1f-1405771683308")
		}
		var self = this;

		nuggetaPlug.addStartResponseHandler (callback);
		nuggetaPlug.start();
		setInterval (function () {
			self.pump()
		}, 500);
	};

	NuggetaInt.prototype.pump = function () {
		var messages = nuggetaPlug.pump();
		if (messages.length > 0) {
			for (var i = 0; i < messages.length; i++) {
				var message = messages[i];
				if (config.debug) {
					console.log(message);
				}
			}
		}
	};
	return new NuggetaInt();
});