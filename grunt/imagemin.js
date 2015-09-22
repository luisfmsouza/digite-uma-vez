module.exports = {
  options: {
    optimizationLevel: 3
  },
  dev: {
    files: [{
      expand: true,     // Enable dynamic expansion.
      cwd: '<%= dest.images %>',      // Src matches are relative to this path.
      src: ['**/*.{png,jpg,gif}'], // Actual pattern(s) to match.
      dest: '<%= dest.images %>',   // Destination path prefix.
    }]
  }
}
