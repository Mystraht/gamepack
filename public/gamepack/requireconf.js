requirejs.config ({
	baseUrl: "js/",
	paths: {

		// External apis
		nuggetaInt		: "../gamepack/apis/nuggetaInt",
		kongregateInt 	: "../gamepack/apis/kongregateInt",

		// General Classes
		Collider 		: "../gamepack/classes/Collider",
		GameObject 		: "../gamepack/classes/GameObject",
		Renderer 		: "../gamepack/classes/Renderer",
		Color 			: "../gamepack/classes/Color",
		Vector2 		: "../gamepack/classes/Vector2",

		// Entities holding
		world 			: "../gamepack/entities/world",
		
		// Enums
		GameStates 		: "../gamepack/enums/GameStates",
		KeyboardButtons : "../gamepack/enums/KeyboardButtons",

		// GUI
		loadingBar 		: "../gamepack/gui/loadingBar",
		CanvasButton	: "../gamepack/gui/CanvasButton",
		buttonsManager 	: "../gamepack/gui/buttonsManager",

		// Inputs
		inputs			: "../gamepack/inputs/inputs",
		Mouse 			: "../gamepack/inputs/Mouse",
		MouseButton 	: "../gamepack/inputs/MouseButton",
		Button 	: "../gamepack/inputs/Button",

		// Levels
		GameLevel 		: "../gamepack/levels/GameLevel",
		LevelSelector 	: "../gamepack/levels/LevelSelector",
		levelsManager 	: "../gamepack/levels/levelsManager",

		// Maps
		mapLoader			: "../gamepack/maps/mapLoader",
		mapManager 		: "../gamepack/maps/mapManager",
		Map 					: "../gamepack/maps/Map",
		MapLayer 			: "../gamepack/maps/MapLayer",
		mapRenderer 	: "../gamepack/maps/mapRenderer",

		// Mobile
		orientationManager : "../gamepack/mobile/orientationManager",

		// Others
		gameloop 		: "../gamepack/gameloop",
		config 			: "../gamepack/config",
		initGame 		: "../gamepack/initGame",
		leadbolt 		: "../gamepack/leadbolt",
		scores 			: "../gamepack/scores",
		gamepackImages 	: "../gamepack/gamepackImages",
		localStorageSupport : "../gamepack/localStorageSupport",

		// Particles
		Particle 		: "../gamepack/particles/Particle",
		ParticleEmitter : "../gamepack/particles/ParticleEmitter",
		particleSystem 	: "../gamepacl/particles/particleSystem",

		// Rendering
		Animation		: "../gamepack/rendering/Animation",
		canvas 			: "../gamepack/rendering/canvas",
		graphics 		: "../gamepack/rendering/graphics",
		camera 			: "../gamepack/rendering/camera",
		cursor 			: "../gamepack/rendering/cursor",

		// Resources
		assetsManager 	: "../gamepack/resources/assetsManager",
		imageManager 	: "../gamepack/resources/imageManager",
		soundsManager 	: "../gamepack/resources/soundsManager",
		
		// Scene
		scenesManager	: "../gamepack/scene/scenesManager",
		GameScene 		: "../gamepack/scene/GameScene",
		loadingScreen 	: "../gamepack/scene/loadingScreen",

		// Sound
		initSound 		: "../gamepack/sound/initSound",

		// Utilities
		rAnimFrame 		: "../gamepack/utilities/requestAnimFrame",
		Stats 			: "../gamepack/utilities/Stats",
		time 			: "../gamepack/utilities/time",
		utils 			: "../gamepack/utilities/utils",

		// Nintendo - Confidential files unactivated
		
/*		Wiimote 		: "../gamepack/nintendo/Wiimote",
		miiverse 		: "../gamepack/nintendo/miiverse",
		nex 			: "../gamepack/nintendo/nex",
		aoc 			: "../gamepack/nintendo/aoc",
*/
		/* External libs */
		jquery 			: "../libs/jquery/jquery.min",
		"requirejs-domready": "../libs/requirejs-domready/domReady",
		underscore 		: "../libs/underscore/underscore",
		requirejs 		: "../libs/requirejs/require",
		modernizr 		: "../libs/modernizr/modernizr",
		howl 			: "../libs/howler/howler.min",
		soundjs 		: "../libs/soundjs/soundjs.min"
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
		},
		modernizr : {
			exports : "Modernizr"
		},
		howl : {
			exports : "Howler",
			init : function () {
				return {
					Howl : Howl,
					Howler : Howler
				}
			}
		}
	},
	urlArgs: "d=" + Date.now()
});

// Function to load external APIs dynamically before initializing the gamepack
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
	// We prepare the config and the APIs we need
	config.init(gameConfig);
	var scripts = [];
	for (var i in config.api) {
		addScript(config.api[i]);
	}
	$(document).ready ( function () {
		// Loads the gamepack
		require (["gameloop", "scenesManager", "mapScene", "menuScene", "images", "imageManager",
			"lvlSelect", "endLvl", "assetsManager", "assets", "soundsManager"],
		function (gameloop, scenesManager, mapScene, menuScene, images, imageManager,
			lvlSelect, endLvl, assetsManager, assets, soundsManager) {

			// Add your game scenes
			scenesManager.addScene("menu", menuScene);

			// Initialize the assets loaders
			soundsManager.init (config.audioPath);
			imageManager.init(config.imgFolder);
			
			assetsManager.push (assets.image, "image");
			assetsManager.push (assets.sound, "sound");
			
			// Launches the game
			gameloop.init();
			return true;
		});
	});
});