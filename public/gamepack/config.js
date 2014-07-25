define(["underscore"], function (_) {
  var config = {
    debug : false,//((location.host.search("localhost") == 0 || location.host.search("developer") != -1) ? true : false),
    imgFolder : "imgs/",
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
        use : true,
        url : 'http://www.kongregate.com/javascripts/kongregate_api.js'
      }
    },
    logLvl : 3,
    ads : true,
    adsTimer : 0.5,
    startScene : "main",
    canvas : {
      gameContainer : "#gameContainer",
      width : 640,
      height : 888,
      renderMode : "RATIO_CSS",
      id : "gameCanvas"
    }
  };
  if (config.debug) {
    window.config = config;
  }

  config.init = function (conf) {
    _.extend(this, conf);
  };
  
  return config;
});
