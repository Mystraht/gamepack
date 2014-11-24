define (["imageManager",  "soundsManager"], 
function (imageManager, soundsManager) {
	// Assets manager, manages the list of assets and their loading, delegating to other classes
	var assetManagers = {
		"image" 	: imageManager,
		"sound" 	: soundsManager
	};

	var AssetsManager = function () {

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
	AssetsManager.prototype.getPercentage = function () {
		var p = 0;
		for (var i in assetManagers) {
			p += assetManagers[i].getPercentage();
		}
		return p / 2;
	};
	// Adds a new asset to the list
	AssetsManager.prototype.add = function (name, file, type) {
		assetManagers[type].add (name, file);
	};
	AssetsManager.prototype.push = function (obj, type) {
		assetManagers[type].push (obj);
	};
	return new AssetsManager();
});