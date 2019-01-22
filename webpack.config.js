const webpack = require('webpack');
const path = require('path');
const NodemonPlugin = require( 'nodemon-webpack-plugin' )

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'src', 'client', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  target: 'web',
  mode: 'development',
  devServer: {
    hot: true,
    port:8080,
    proxy: {
      '**': {
        target: 'http://localhost:8000/',
      }
    }
  },
  plugins: [

    new NodemonPlugin(
      {
        watch: path.resolve('./src/client'),
        ext: 'jsx,js,json',
        script: './src/server/main.js'
      }
    ),

    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
          loader: "babel-loader",
          },
          {
          loader: 'react-hot-loader/webpack',
          }
      ]
      }
    ]
}
};