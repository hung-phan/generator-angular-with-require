'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You just create the sub controller with the argument ' + this.name + '. Please link it with your main controller');
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  var prefix = 'app/src/' + this.name + '/';
  this.mkdir(prefix);
  this.template('controller-template.js'        , prefix + this.name + '.js');
  this.template('controller-template.spec.js'   , prefix + this.name + '.spec.js');
  this.template('controller-template.tpl.html' , prefix + this.name + '.tpl.html');
};
