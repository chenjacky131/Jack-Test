(function (factory, window) {

  // define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) {
      define(['leaflet'], factory);

  // define a Common JS module that relies on 'leaflet'
  } else if (typeof exports === 'object') {
      module.exports = factory(require('leaflet'));
  }

  // attach your plugin to the global 'L' variable
  if (typeof window !== 'undefined' && window.L) {
      window.L.YourPlugin = factory(L);
  }
}(function (L) {
  var MyLeafletPlugin = {};
  // implement your plugin
  MyLeafletPlugin.run = () => {
    console.log(L, 'run run run ')
  }
  // return your plugin when you are done
  return MyLeafletPlugin;
}, window));