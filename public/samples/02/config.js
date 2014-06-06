define([], function () {
  var config = {
    startScene : "sample2"
  };
  if (config.debug) {
    window.config = config;
  }
  return config;
});
