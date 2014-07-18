requirejs.config ({
	baseUrl: "js/",
	paths: {

		// Classes
		Collider 		: "../gamepack/classes/Collider",
		GameObject 		: "../gamepack/classes/GameObject",
		Renderer 		: "../gamepack/classes/Renderer",
		Color 			: "../gamepack/classes/Color",
		Vector2 		: "../gamepack/classes/Vector2",
		
		// entities
		world 			: "../gamepack/entities/world",

		// Inputs
		inputs			: "../gamepack/inputs/inputs",
		
		// Enums
		GameStates 		: "../gamepack/enums/GameStates",

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
console.log("sup");