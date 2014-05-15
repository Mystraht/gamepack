define([], function() {
	var ImageManager = function() {
    	// Base folder of the images. You can change it to whatever is your image folder
    	this.baseFolder = "images/";
    	this.images = {};
    	this.imagesToLoad = 0;
    	this.imagesLoaded = 0;
    };

    ImageManager.prototype.init = function (baseFolder) {
    	this.baseFolder = baseFolder;
    };
    // returns true if everything is loaded
    ImageManager.prototype.isLoaded = function () {
    	if (this.imagesToLoad === this.imagesLoaded) {
    		return true;
    	}
    	else {
    		return false;
    	}
    };

    // Handles the loading
    ImageManager.prototype.loadImage = function(i) {

    	var img = this.images[i].img;
    	var _this = this;
    	img.addEventListener('load', function (event) {
    		_this.images[i].loaded = true;
    		_this.imagesLoaded++;
    		//console.log(_this.imagesToLoad, _this.imagesLoaded);
    	});
    	img.src = this.images[i].url;
    };

    // If you want to manually add an already existing image to the manager
    ImageManager.prototype.add = function(name, img) {
    	this.images[name] = {
    		img : img,
    		url : null,
    		loaded : 1
    	};
    };

    /* Fills the manager. Takes as parameter an object of this form : {

		"reference" : "url",
		"reference2" : "url2",
		"player" : "characters/player.png"
    }
    Where reference is the name you want to use to get the image (imageManager.get(reference))
    and url is the url of your image ("characters/player.png")
    */
    ImageManager.prototype.pushImages = function(images) {

    	for (var i in images) {
    		var p = images[i];
    		var img = new Image();
    		this.images[i] = {
    			img : img,
    			url : this.baseFolder + p,
    			loaded : 0
    		};
    		this.imagesToLoad++;
    		this.loadImage(i);
    	}
    };

    // returns an image based on its reference
    ImageManager.prototype.get = function (name) {

    	if (this.images[name]) {
    		return this.images[name].img;
    	} else {
    		console.warn ("Asked for unknown image : " + name);
    		return false;
    	}
    };

    return new ImageManager();
  });