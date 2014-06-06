define([], function () {
  var config = {
    startScene : "sample1"
  };
  if (config.debug) {
    window.config = config;
  }
  return config;
});
