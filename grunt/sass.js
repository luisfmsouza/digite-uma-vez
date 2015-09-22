module.exports = {
  options: {
    sourceMap: true
  },
  dev: {
    files: {
      '<%= dest.sass %>style.css': ['<%= source.sass %>style.scss']
    }
  }
}