/* Stores the button in a scene and exposes methods to add/delete new buttons */
define (["CanvasButton"], function (CanvasButton) {
	var ButtonsManager = function () {
		this.buttons = [];

	};

	/* Delete all buttons */
	ButtonsManager.prototype.reset = function () {
		this.buttons = [];
	};

	/* Adds a new button with the givern parameters */
	ButtonsManager.prototype.addButton = function (infos) {
		this.buttons.push (new CanvasButton (infos));
	};

	/* Renders all buttons in the scene */
	ButtonsManager.prototype.render = function () {
		for (var i = 0; i < this.buttons.length; i++) {
			this.buttons[i].render();
		}
	};

	/* Processed logic for the buttons */
	ButtonsManager.prototype.inputs = function () {
		for (var i = 0; i < this.buttons.length; i++) {
			this.buttons[i].inputs();
		}
	};
	return new ButtonsManager();

});