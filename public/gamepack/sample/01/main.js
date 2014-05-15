requirejs.config ({
	baseUrl: "../../../js/",
	paths: {

		// Enums
		GameStates 		: "../gamepack/enums/GameStates",

		// Rendering
		canvas 			: "../gamepack/rendering/canvas",
		// Resources
		assetsManager 	: "../gamepack/resources/assetsManager",
		imageManager 	: "../gamepack/resources/imageManager",

		// Utilities
		rAnimFrame 		: "../gamepack/utilities/requestAnimFrame",
		Stats 			: "../gamepack/utilities/Stats",
		time 			: "../gamepack/utilities/time",

		// Scene
		scenesManager	: "../gamepack/scene/scenesManager",
		GameScene 		: "../gamepack/scene/GameScene",

		// Others
		gameloop 		: "../gamepack/gameloop",
		config 			: "../gamepack/config",
		initGame 		: "../gamepack/initGame",

		/* External libs */
		jquery 			: "../libs/jquery/jquery",
		"requirejs-domready": "../libs/requirejs-domready/domReady",
		underscore 		: "../libs/underscore/underscore",
		requirejs 		: "../libs/requirejs/require",
		modernizr 		: "../libs/modernizr/modernizr"
	},
	shim: {
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		},
		Stats : {
			exports : "Stats"
		}
	},
	urlArgs: "d=1396975360228"
});

require (["gameloop", "../gamepack/sample/01/sample1", "scenesManager", "../gamepack/sample/01/config"], 
function (gameloop, sampleScene, scenesManager, config) {
	scenesManager.addScene("sample1", sampleScene);
	gameloop.init(config);
	return true;
});