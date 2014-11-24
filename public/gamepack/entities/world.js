/** World class for storing and rendering game objects
- Can be used in a scene for easy standard gameobject management
- WIP
**/
define (["GameObject", "Renderer", "Collider", "utils", "graphics"],
	function (GameObject, Renderer, Collider, utils, graphics) {
	var World = function () {
		this.gameObjects = {};
		this.renderers = {};
		this.colliders = {};
	};

	/* Creates a new gameobject and adds it to the world
	* Param: a json object containing gameobject infos
	*/
	World.prototype.createGameObject= function (infos) {
		var id = utils.guid();
		infos._id = id;
		var gameObject = new GameObject (infos);
		this.gameObjects[id] = gameObject;
		return gameObject;
	};

	/* Creates a renderer and adds it to the world
	* Param: A json object containing the renderer infos
	*/
	World.prototype.createRenderer = function (infos) {
		var id = utils.guid();
		infos._id = id;
		var renderer = new Renderer(infos);
		this.renderers[id] = renderer;
		return renderer;
	};

	/* Renders all renderers in the world */
	World.prototype.render = function () {
		for (var i in this.renderers) {
			graphics.renderObject(this.renderers[i]);
		}
	};

	return new World();
});