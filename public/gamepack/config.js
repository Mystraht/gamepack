define(["underscore"], function (_) {
  var config = {
    debug : true,
    gameContainer : "#gameContainer",
    imgFolder : "imgs/",
    logLvl : 3,
    startScene : "main",
    canvas : {
      width : 980,
      height : 650,
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
