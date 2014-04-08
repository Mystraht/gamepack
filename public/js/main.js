requirejs.config ({
	baseUrl: "js/",
	paths: {
		jquery: "../libs/jquery/jquery",
		"requirejs-domready": "../libs/requirejs-domready/domReady",
		underscore: "../libs/underscore/underscore",
		rAnimFrame: "../libs/requestAnimFrame",
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

define(["game"], function (game) {
	console.log("coucou");
});
