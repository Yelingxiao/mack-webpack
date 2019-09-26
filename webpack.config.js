const path = require('path')
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin');

module.exports = {
  mode: 'development', // 先设置为development，不压缩代码，方便调试
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: path.resolve(__dirname, './loaders/myBabelLoader.js'),
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
    ]
  },
  plugins: [new HelloWorldPlugin({ options: true })]
}