# grunt-jshint-event-reporter
> Calls an error event for [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
> You can make your reporter: [Writing your own JSHint reporter](https://jshint.com/docs/reporters/)

## Getting Started

This plugin requires Grunt `~1.0.3`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

##  Install
```shell
npm i grunt-jshint-event-reporter --save-dev
```

##  Usage

```shell
grunt.event.on('jshint-error', function(err){
    console.log(JSON.stringify(err));
});
```

## Examples

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
      jshint: {
          options: {
            reporter: require('grunt-jshint-event-reporter')
          },
          before: ['src/js/**/*.js']
      },

      uglify: {
          all: {
            files: [{
              expand: true,
              cwd: 'src',
              src: 'js/**/*.js',
              dest: 'build'
            }]
          }
      },

      watch: {
          options: {
            spawn: false 
            // It is recommended to disable `false` or not use 'grunt-contrib-watch' 
            // or perhaps even Grunt. Because it works very very slowly.
          },
          js: {
              files: ['src/**/*.js'],
              tasks: ['jshint', 'uglify']
          }      
      },
  });

  // Load the plugins (It assumes you already have all of these plugins)
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.event.on('jshint-error', function(err){
      console.log(JSON.stringify(err));
  });
}
```