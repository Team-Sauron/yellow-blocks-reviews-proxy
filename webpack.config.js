const path = require('path');

module.exports = {
  mode: 'development',

  entry: `${path.join(__dirname, './public/index.html')}`,

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
    }]
  },
};
