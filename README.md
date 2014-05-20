# generator-angular-with-require [![Build Status](https://secure.travis-ci.org/hung-phan/generator-angular-with-require.png?branch=master)](https://travis-ci.org/hung-phan/generator-angular-with-require)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

To run this version of yeoman generator. First, make sure that you have already installed yeoman

```
$ npm install -g yo
```

To install generator-angular-with-require from npm, run:

```
$ npm install -g generator-angular-with-require
```

Finally, initiate the generator:

```
$ yo angular-with-require
```

Other dependencies

1. [Phantom.js] (http://phantomjs.org/) - You can change this in the config/karma.config.js by changing browsers tag

2. [Bower] (http://bower.io/)

3. [Grunt] (http://gruntjs.com/)

4. SASS (gem install sass)

5. Compass (gem install compass)

## Usage

The version of generator uses SASS Bootstrap as its main theme. If you want to use Compass framework, make sure that you
view their docs to know what to include [Compass](http://compass-style.org/reference/compass)

To run the serve, and start building your application
```
$ grunt serve
```
It will automatically open the webpage on your localhost:9000, or you will have to do it manuallly

To run test
```
$ grunt karma:unit:start
```

To build files for production
```
$ grunt build
```

This also supports for subgenerator for controller, filter, service, and directive as well. Make sure you link them in your
main module

```
$ yo angular-with-require:controller "name" #replace the name with your module name
$ yo angular-with-require:service "name" #replace the name with your module name
$ yo angular-with-require:directive "name" #replace the name with your module name
$ yo angular-with-require:filter "name" #replace the name with your module name
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
