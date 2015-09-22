'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    jitGrunt: true,
    config: {
      'source': {
        'images': 'source/images/',
        'sass': 'source/sass/',
        'js': 'source/js/'
      },
      'dest': {
        'images': 'images/',
        'sass': 'css/',
        'js': 'js/'
      }
    }
  });

  grunt.registerTask('default', ['browserSync:dev', 'watch:css', 'watch:js']);

  // grunt.registerTask('default', ['server']);
};
