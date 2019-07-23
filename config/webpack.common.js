/**
 * @author: mbellange
 */
const helpers = require('./helpers');
const devMode = process.env.NODE_ENV !== 'production'

/**
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
// NOTE refacto pour passer tous les fichiers en .sss
module.exports = {

  entry: {
    main: './client/app'
  },

  resolve: {
    extensions: ['.js', '.sss'],
    modules: [helpers.root('client'), helpers.root('public'), helpers.root('node_modules')]
  },

  module: {

    rules: [

      {
        test: /\.js$/,
        exclude: [/node_modules/, /config/, /server/, /public/],
        use: 'babel-loader'
      },

      {
        test: /\.sss$/,
        exclude: [/@fortawesome/],
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.css$/,
        include: [/@fortawesome/],
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              alias: {
                '../fonts': 'font-awesome/fonts',
                './images': 'images'
              }
            }
          }
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot|png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]

  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new CleanWebpackPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  node: {
    global: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
