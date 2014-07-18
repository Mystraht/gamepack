requirejs.config ({
	baseUrl: "../../js/",
	paths: {

		// apis
		nuggetaInt		: "../gamepack/apis/nuggetaInt",

		// Classes
		Collider 		: "../gamepack/classes/Collider",
		GameObject 		: "../gamepack/classes/GameObject",
		Renderer 		: "../gamepack/classes/Renderer",
		Color 			: "../gamepack/classes/Color",
		Vector2 		: "../gamepack/classes/Vector2",
		
		// entities
		world 			: "../gamepack/entities/world",

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

		/* External libs */
		jquery 			: "../libs/jquery/jquery",
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
	urlArgs: "d=1396975360228"
});

require (["gameloop", "../samples/learning/learning", "scenesManager", 
	"../samples/learning/config", "../samples/learning/menuScene"], 
function (gameloop, sampleScene, scenesManager, 
config, menuScene) {

	scenesManager.addScene("learning", sampleScene);
	scenesManager.addScene("menu", menuScene);
	gameloop.init(config);
	return true;
});