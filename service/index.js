'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the service subgenerator with the argument ' + this.name + '.');
  this.uppercaseName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

ServiceGenerator.prototype.files = function files() {
  var prefix = 'app/src/' + this.name + '/';
  this.mkdir(prefix);
  this.template('service-template.js'       , prefix + this.name + '.js');
  this.template('service-template.spec.js'  , prefix + this.name + '.spec.js');
};
