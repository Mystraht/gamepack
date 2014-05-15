define (["imageManager", "soundManager"], 
function (imageManager, soundManager) {
	// Assets manager, manages the list of assets and their loading, delegating to other classes
	var assetManagers = {
		"image" 	: imageManager,
		"sound" 	: soundManager
	};

	var AssetsManager = function () {
		this.assets = {
			"image" : {},
			"sound" : {}
		};
	};

	// Gets an asset
	AssetsManager.prototype.get = function (name, type) {
		// Gets the correct manager from the list, then sends it the name of the asset
		return assetManagers[type].get(this.assets[type][name]);
	};

	// Checks if all assets are loaded
	AssetsManager.prototype.isLoaded = function () {
		for (var i in assetManagers) {
			if (!assetManagers[i].isLoaded()) return false;
		}
		return true;
	};

	// Adds a new asset to the list
	AssetsManager.prototype.add = function (name, file, type) {
		assetManagers[type].add (name, file);
	};
	return new AssetsManager();
});