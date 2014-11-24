requirejs.config ({
	baseUrl: "templatejs/",
	paths: {

		// apis
		nuggetaInt		: "../gamepack/apis/nuggetaInt",
		kongregateInt 	: "../gamepack/apis/kongregateInt",

		// Classes
		Collider 		: "../gamepack/classes/Collider",
		GameObject 		: "../gamepack/classes/GameObject",
		Renderer 		: "../gamepack/classes/Renderer",
		Color 			: "../gamepack/classes/Color",
		Vector2 		: "../gamepack/classes/Vector2",

		// entities
		world 			: "../gamepack/entities/world",

		// GUI
		loadingBar 		: "../gamepack/gui/loadingBar",

		// Enums
		GameStates 		: "../gamepack/enums/GameStates",

		// Inputs
		inputs			: "../gamepack/inputs/inputs",
		Mouse 			: "../gamepack/inputs/Mouse",
		MouseButton 	: "../gamepack/inputs/MouseButton",

		// Rendering
		canvas 			: "../gamepack/rendering/canvas",
		graphics 		: "../gamepack/rendering/graphics",
		camera 			: "../gamepack/rendering/camera",

		// Resources
		assetsManager 	: "../gamepack/resources/assetsManager",
		imageManager 	: "../gamepack/resources/imageManager",

		// Utilities
		rAnimFrame 		: "../gamepack/utilities/requestAnimFrame",
		Stats 			: "../gamepack/utilities/Stats",
		time 			: "../gamepack/utilities/time",
		utils 			: "../gamepack/utilities/utils",

		// Particles
		Particle 		: "../gamepack/particles/Particle",
		ParticleEmitter : "../gamepack/particles/ParticleEmitter",
		particleSystem 	: "../gamepacl/particles/particleSystem",

		// Scene
		scenesManager	: "../gamepack/scene/scenesManager",
		GameScene 		: "../gamepack/scene/GameScene",

		// Others
		gameloop 		: "../gamepack/gameloop",
		config 			: "../gamepack/config",
		initGame 		: "../gamepack/initGame",
		leadbolt 		: "../gamepack/leadbolt",
		scores 			: "../gamepack/scores",

		/* External libs */
		jquery 			: "../libs/jquery/jquery.min",
		"requirejs-domready": "../libs/requirejs-domready/domReady",
		underscore 		: "../libs/underscore/underscore",
		requirejs 		: "../libs/requirejs/require",
		modernizr 		: "../libs/modernizr/modernizr",
		howler 			: "../libs/howler/howler.min"
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
	urlArgs: "d=" + Date.now()
});
function addScript (obj) {
	if (obj.use) {
		var scr = document.createElement("script");
		scr.type = "text/javascript"
		scr.src = obj.url;
		document.head.appendChild(scr);
	}
}
require (["requirejs-domready", "jquery", "config", "gameConfig"],
function (domready, $, config, gameConfig) {
	config.init(gameConfig);
	var scripts = [];
	for (var i in config.api) {
		addScript(config.api[i]);
	}
	$(document).ready ( function () {
		require (["gameloop", "scenesManager", "templateScene"],
		function (gameloop, scenesManager, templateScene) {

			scenesManager.addScene("template", templateScene);
			gameloop.init();
			return true;
		});
	});
});