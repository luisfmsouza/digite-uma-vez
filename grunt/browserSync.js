module.exports = {
  dev: {
    bsFiles: {
      src : ['<%= dest.sass %>*.css', '*.html', '<%= dest.js %>*.js']
    },
    options: {
      server: {
        baseDir: "./"
      },
      port: 82,
      watchTask: true,
    }
  }
}
