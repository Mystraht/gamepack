require(["gamepack/requireconf"], function (requireConfig) {
	require (["gameloop", "../gamepack/sample/01/sample1", "scenesManager", "../gamepack/sample/01/config"], 
	function (gameloop, sampleScene, scenesManager, config) {
		scenesManager.addScene("sample1", sampleScene);
		gameloop.init(config);
		return true;
	});
});