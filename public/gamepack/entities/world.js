define (["GameObject", "Renderer", "Collider", "utils", "graphics"], 
	function (GameObject, Renderer, Collider, utils, graphics) {
	var World = function () {
		this.gameObjects = {};
		this.renderers = {};
		this.colliders = {};
	};

	World.prototype.createGameObject= function (infos) {
		var id = utils.guid();
		infos._id = id;
		var gameObject = new GameObject (infos);
		this.gameObjects[id] = gameObject;
		return gameObject;
	};

	World.prototype.createRenderer = function (infos) {
		var id = utils.guid();
		infos._id = id;
		var renderer = new Renderer(infos);
		this.renderers[id] = renderer;
		return renderer;
	};

	World.prototype.render = function () {
		for (var i in this.renderers) {
			graphics.renderObject(this.renderers[i]);
		}
	};

	return new World();
});