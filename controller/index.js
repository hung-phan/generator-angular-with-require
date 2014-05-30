'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You just create the sub controller with the argument ' + this.name + '. Please link it with your main controller');
  this.uppercaseName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  // replace between
  function replaceBetween(string, start, end, what) {
    return string.substring(0, start) + what + string.substring(end);
  };

  var prefix = 'app/src/' + this.name + '/';
  this.mkdir(prefix);
  this.template('controller-template.js'       , prefix + this.name + '.js');
  this.template('controller-template.spec.js'  , prefix + this.name + '.spec.js');
  this.template('controller-template.tpl.html' , prefix + this.name + '.tpl.html');

  var configFile = process.cwd() + '/app/src/config.js';
  fs.exists(configFile, function(exists) {
      fs.readFile(configFile, "utf8", function (err, data) {
        if (err) throw err;

        var tag = this.name + '/' + this.name;
        if (data.indexOf(tag) != -1) return; // already exists tag

        var index = data.indexOf('/*--insert code tag--do not remove*/');
        var config = '/*require ' + this.name + ' module*/\n' +
                     '\'' + this.name + '\': \'' + this.name + '/' + this.name + '\',\n';
        data = replaceBetween(data, index, index, config);
        fs.writeFile(configFile, data, function(err) {
          if(err) { console.log(err); } else { console.log("The config file was saved!"); }
        });
      });
    }
  });
};
