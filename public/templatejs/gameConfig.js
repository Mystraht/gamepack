define ([], function () {
	var gameConfig = {
		imgFolder : "templateImg/",
		startScene: "template",
		api : {
      ads : {
        use : false,
        url : "http://ad.leadboltmobile.net/show_app_ad.js?section_id=165440144"
      },
      nuggeta : {
        use : false,
        url : "src/nuggeta.js",
        apiUrl : "nuggeta://sheepkeeper_2fbd4c44-a969-4a1b-88f6-194b662fcd1f"
      },
      kongregate : {
        use : false,
        url : 'http://www.kongregate.com/javascripts/kongregate_api.js'
      }
    }
	};

	return gameConfig;
});