# grunt-jshint-event-reporter
> Calls an error event for [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
> You can make your reporter: [Writing your own JSHint reporter](https://jshint.com/docs/reporters/)

## Getting Started

##  Usage

```shell
npm install compress-images --save-dev
```

## Examples

```javascript
grunt.event.on('jshint-error', function(err){
    console.log(JSON.stringify(err));
});
```