const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production'
  const webpackConfig = {
    entry: {
      main: './src/client.js',
    },
    output: {
      filename: isProduction ? '[name].[hash].bundle.js' : '[name].dev.bundle.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: path.resolve(__dirname, './src'),
          options: {
            presets: [['env', { target: { browsers: ['defaults', 'ie >= 9'] } }], 'stage-0', 'react'],
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isProduction ? '"production"' : '"development"',
        },
      }),
    ],
  }
  if (isProduction) {
    // webpackConfig.plugins.push(new BundleAnalyzerPlugin())
  } else {
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
    webpackConfig.devtool = 'inline-source-map'
    webpackConfig.devServer = {
      hot: true,
      host: 'localhost',
      port: 5000,
    }
  }
  return webpackConfig
}

