define(["underscore"], function (_) {
  var config = {
    debug : true,
    imgFolder : "imgs/",
    logLvl : 3,
    startScene : "main",
    canvas : {
      gameContainer : "#gameContainer",
      width : 640,
      height : 1136,
      renderMode : "RATIO_CSS",
      id : "gameCanvas"
    },
    nuggeta : {
      use : true,
      url : "nuggeta://sheepkeeper_2fbd4c44-a969-4a1b-88f6-194b662fcd1f"
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
