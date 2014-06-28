'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var FilterGenerator = module.exports = function FilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the filter subgenerator with the argument ' + this.name + '.');
};

util.inherits(FilterGenerator, yeoman.generators.NamedBase);

FilterGenerator.prototype.files = function files() {
  var prefix = 'app/src/' + this.name + '/';
  this.mkdir(prefix);
  this.template('filter-template.js'       , prefix + this.name + '.js');
  this.template('filter-template.spec.js'  , prefix + this.name + '.spec.js');
};
