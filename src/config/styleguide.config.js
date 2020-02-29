const path = require('path')

module.exports = {
  components: '../components/elements/**/*.jsx',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './ThemeWrapper')
  }
}
