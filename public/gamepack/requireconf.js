requirejs.config ({
	baseUrl: "js/",
	paths: {

		/* Gamepack */
		gameloop : "../gamepack/gameloop",
		GameStates : "../gamepack/GameStates"
		rAnimFrame: "../gamepack/requestAnimFrame",
		/* External libs */
		jquery: "../libs/jquery/jquery",
		"requirejs-domready": "../libs/requirejs-domready/domReady",
		underscore: "../libs/underscore/underscore",
		requirejs: "../libs/requirejs/require",
		modernizr: "../libs/modernizr/modernizr"
	},
	shim: {
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		}
	},
	urlArgs: "d=1396975360228"
});