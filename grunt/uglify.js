var debugg = true;

module.exports = {
  options : {
    mangle                      : !debugg,
    compress                    : !debugg,
    beautify                    : debugg
  },
  dev: {
    expand: true,
    files: {
      '<%= dest.js %>digite-uma-vez.min.js' : ['<%= source.js %>*.js']
    }
  }
}