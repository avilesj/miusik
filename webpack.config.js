const webpack = require('webpack');
const path = require('path');
const NodemonPlugin = require( 'nodemon-webpack-plugin' )

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'src', 'client', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  target: 'node',
  plugins: [

    new NodemonPlugin(
      {
        watch: path.resolve('./src/client'),
        ext: 'js,njk,json',
        script: './src/server/main.js'
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
}
};