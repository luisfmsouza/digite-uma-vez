module.exports = {
  options: {
    bundleExec: false,
    config: '.scss-lint.yml',
    colouriseOutput: true,
    colorizeOutput: true,
    compact: false,
    force: true,
    maxBuffer: 1000 * 1024
  },
  dev: {
    files: {
      src: ['<%= source.sass %>**/*.scss']
    }
  },
}
