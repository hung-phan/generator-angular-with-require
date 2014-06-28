'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var DirectiveGenerator = module.exports = function DirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the directive subgenerator with the argument ' + this.name + '.');
  this.uppercaseName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
};

util.inherits(DirectiveGenerator, yeoman.generators.NamedBase);

DirectiveGenerator.prototype.files = function files() {
  var prefix = 'app/src/' + this.name + '/';
  this.mkdir(prefix);
  this.template('directive-template.js'       , prefix + this.name + '.js');
  this.template('directive-template.spec.js'  , prefix + this.name + '.spec.js');
  this.template('directive-template.tpl.html' , prefix + this.name + '.tpl.html');
};
