define ([], function () {
	var KongregateInt = function () {

	};

	KongregateInt.prototype.init = function (callback) {
		var self = this;
		console.log("Loading kongregaTE");
		kongregateAPI.loadAPI (function () {
			console.log("kongregate loaded");
			window.kongregate = kongregateAPI.getAPI();
			self.api = kongregate;
			callback (self.api);
		});
	};

	return new KongregateInt();
});