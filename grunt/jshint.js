module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  dev: {
    files: {
      src: ['<%= source.js %>*.js']
    }
  },
  test: {
    files: {
      src: ['<%= source.js %>test/*.js']
    }
  }
}
