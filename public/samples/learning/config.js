define([], function () {
  var config = {
    startScene : "learning"
  };
  if (config.debug) {
    window.config = config;
  }
  return config;
});
