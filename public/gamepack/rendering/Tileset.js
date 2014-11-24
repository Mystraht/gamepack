define (["imageManager"], function (imageManager) {
	var Tileset = function (infos) {
		this.imageName = infos.imageName;
		this.image = imageManager.get(this.imageName);
		this.caseSize = infos.caseSize;
	};

	return Tileset;
});