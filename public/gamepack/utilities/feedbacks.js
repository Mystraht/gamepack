define (["Feedback"], function (Feedback) {
	var feedbacks = {};

	feedbacks.list = [];

	feedbacks.add = function (type, args) {
		feedbacks.list.push(new Feedback(type, args));
	};

	feedbacks.update = function () {
		for (var i = 0; i < this.list.length; i++) {
			var res = this.list[i].update();
			if (!res) this.list.splice(i, 1);
		};
	};
	feedbacks.render = function () {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].render();
		};
	};

	return feedbacks;
});