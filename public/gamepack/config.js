define(["underscore"], function (_) {
  var config = {
    debug : true,//((location.host.search("localhost") == 0 || location.host.search("developer") != -1) ? true : false),
    imgFolder : "imgs/",
    api : {
      ads : {
        use : false,
        url : "your_leadbolt_url"
      },
      nuggeta : {
        use : false,
        url : "src/nuggeta.js",
        apiUrl : "your_nuggeta_url"
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
