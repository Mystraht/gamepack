define([], function () {
  var config = {
    startScene : "menu"
  };
  if (config.debug) {
    window.config = config;
  }
  return config;
});
