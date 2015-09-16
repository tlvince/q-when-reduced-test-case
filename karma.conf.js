'use strict';
module.exports = function(config) {
  config.set({
    frameworks: [
      'mocha',
      'chai-as-promised',
      'chai'
    ],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/lie/dist/lie.js',
      'node_modules/expect.js/index.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true,
    reporters: ['progress']
  });
};
