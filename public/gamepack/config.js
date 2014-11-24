define(["underscore"], function (_) {
  var config = {
    debug : true,//((location.host.search("localhost") == 0 || location.host.search("developer") != -1) ? true : false),
    imgFolder : "imgs/",
    audioPath : "snds/",
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
        use : false,
        url : 'http://www.kongregate.com/javascripts/kongregate_api.js'
      }
    },
    animSpeed : 0.05,
    mapStart : 0,
    logLvl : 3,
    ads : true,
    adsTimer : 1.5,
    startScene : "menu",
    mapsFolder : "maps/exports/",
    canvas : {
      gameContainer : "#gameContainer",
      width : 1280,
      height : 720,
      renderMode : "RATIO_CSS",
      id : "gameCanvas",
      orientation: "portrait"
    },
    loadingBar : {
      width : 200,
      height : 20,
      bgColor : "black",
      overlayColor : "#333",
      font : "32px Arial",
      txtColor : "white"
    },
    units : {
      speed : 200
    },
    player : {
      speed : 500
    },
    rock : {
      speed : 250
    },
    enemy : {
      speed : 300
    },
    cursor : {
      image : "cursor",
      x : 15,
      y : 0
    },
    levelSelector : {
      lvlTile : "level",
      finishedTile : "finishedLevel",
      lockedTile : "lockedLevel",
      start : {
        x : 200,
        y : 200
      },
      offset : {
        x : 150,
        y : 150
      },
      grid : {
        x : 6,
        y : 4
      },
      stars : {
        empty : "star_empty",
        full : "star_full",
        start : {
          x : -55,
          y : -72
        },
        offset : 35,
        size : 40
      },
      tileSize : 80
    },
    tileSize : 60
  };
  config.guiTemplate = {
      muteButton : {
        image : "mute",
        position : {
          x : config.canvas.width - 80,
          y : config.canvas.height - 80
        },
        size : {
          x : 80,
          y : 80
        }
      },
      homeButton : {
        image : "home",
        position : {
          x : 80,
          y : 80
        },
        size : {
          x : 80,
          y : 80
        }
      },
      retryButton : {
        image : "retry",
        position : {
          x : config.canvas.width - 80,
          y : 80
        },
        size : {
          x : 80,
          y : 80
        }
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
