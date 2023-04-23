conditionizr.add("noWS", function () {
  return !window.WS;
});

conditionizr.polyfill("Lib.js", ["noWS"]);
