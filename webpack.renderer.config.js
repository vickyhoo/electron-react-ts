const rules = require('./webpack.rules');
const path = require('path');

rules.push(
  {
    test: /\.(s?css)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.(svg|ico|icns)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  },
  {
    test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
    loader: 'url-loader',
    options: {
      name: '[path][name].[ext]'
    }
  }
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
