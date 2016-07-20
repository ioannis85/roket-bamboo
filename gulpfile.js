'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var config = {
port :9005,
devBaseUrl : 'http://localhost',
paths : {
    html : './src/*.html',
    dist : './dist'
  }
};





/* Start a local development server */
gulp.task('connect',function(){
  var serverOpts = {
    root:['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload : true
  };
  connect.server(serverOpts);
});

gulp.task('test',function(){
    console.log('testing app');
});
