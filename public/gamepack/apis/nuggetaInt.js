define ([], function () {
	var NuggetaInt = function () {

	};

	NuggetaInt.prototype.init = function (conf, callback) {
		window.nuggetaPlug = new NuggetaPlug().init(conf.url);
		nuggetaPlug.addStartResponseHandler (callback);
		nuggetaPlug.start();
	};

	return new NuggetaInt();
});