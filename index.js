/* jshint node: true */
'use strict';

var open = require('open');
var fs = require('fs');

var openFn = function() {
  var defaultPort = 4200;
  var configFile = fs.readFileSync('.ember-cli', 'utf8');
  var config = JSON.parse(configFile);
  var url = 'http://localhost:' + config.port || defaultPort;
  console.log('Opening your project on ' + url);
  open(url);
};

module.exports = {
  name: require('./package').name,
  includedCommands: function() {
    return {
      oCommand: {
        name: 'o',
        description: 'Opens your ember project',
        run: openFn,
      },
      openCommand: {
        name: 'open',
        description: 'Opens your ember project',
        run: openFn,
      },
    };
  },
};
