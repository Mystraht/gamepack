define (["soundjs", "config"], function (soundjs, config) {
	var initSound = function (assets, callback) {
		soundjs.alternateExtensions = ["mp3"];
		soundjs.addEventListener ("loadComplete", callback);
		soundjs.registerManifest(assets, config.audioPath);
	};

	return initSound;
});