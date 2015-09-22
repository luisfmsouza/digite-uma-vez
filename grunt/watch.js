module.exports = {
  css: {
    files: ['<%= source.sass %>**/*.scss'],
    // tasks: ['sass:dev', 'scsslint:dev']
    tasks: ['sass:dev']
  },
  js: {
    files: ['<%= source.js %>**/*.*'],
    // tasks: ['jshint:dev', 'uglify:dev']
    tasks: ['uglify:dev']
  },
  
}
