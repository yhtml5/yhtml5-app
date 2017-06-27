const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const { version, title } = require('./config')()

module.exports = function (env) {
  console.log('\n  The process.env.NODE_ENV is: ', chalk.cyan.bold(process.env.NODE_ENV, env), '\n')

  const HtmlWebpackPluginParams = {
    template: path.resolve(__dirname, './template/template.js'),
    chunksSortMode: 'dependency',
    hash: false,
    cache: true,
    favicon: './app/static/favicon.png',
    minify: (env === 'production') ?
      {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        trimCustomFragments: true
      }
      : () => null
  }

  return {
    // context: path.resolve(__dirname, "./app"),
    entry: {
      index: './app/index.js',
    },
    output: {
      filename: 'static/[name].js',
      chunkFilename: `static/[name]-[id]${(env === 'production') ? '.[chunkhash:6]' : ''}.js`,
      path: path.resolve(__dirname, `../dist/${process.env.NODE_ENV === 'production' ? version : ''}`),
    },
    module: {
      rules: [
        {
          test: /\.(yhtml|html)$/,
          use: [{
            loader: 'html-loader',
            // options: {
            //     root: resolve(__dirname, 'src'),
            //     attrs: ['img:src', 'link:href']
            // }
          }]
        }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  minimize: env === 'production',
                  sourceMap: false,
                  plugins: function () {
                    require('autoprefixer')({/* ...options */ })
                  }
                }
              }]
          })
        }, {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, "../app")
          ],
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                // ["env", {
                //   "targets": {
                //     "browsers": ["last 2 versions", "safari >= 7"]
                //   }
                // }],
                ["es2015", {
                  "modules": false
                }],
                "stage-2",
                "react"
              ],
              plugins: [
                'transform-runtime',
              ]
            }
          }
        }, {
          test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          exclude: /favicon\.ico/,
          use: [{
            loader: 'url-loader',//https://github.com/webpack/file-loader
            options: {
              name: '[name].[hash:6].[ext]',
              limit: 1000,
              outputPath: 'static/img/',
              publicPath: '',//works when you just want to prefix the name with a directory
            }
          }]
        }, {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[hash:6].[ext]',
                limit: 1000,
                outputPath: 'static/img/',
              }
            }, {
              loader: 'image-webpack-loader',
              options: {
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: env === 'production' ? 7 : 1,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
              }
            }
          ]
        }, {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            }, {
              loader: "markdown-loader",
              options: {
                // highlight: function (code) {
                //   return require('highlight').highlightAuto(code).value;
                // }
                //pedantic: true,
                //renderer
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new ExtractTextPlugin(`static/[name]${(process.env.NODE_ENV === 'production') ? '.[chunkhash:6]' : ''}.css`),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV === 'production' ? 'production' : 'development'),
          'version': JSON.stringify(version),
          'title': JSON.stringify(title)
        },
        'DEBUG': process.env.NODE_ENV !== 'production'
      }),
      new HtmlWebpackPlugin(
        Object.assign({}, HtmlWebpackPluginParams, {
          type: 'index',
          chunks: ['index'],
          // excludeChunks: [''],
          filename: 'index.html',
          inlineSource: '.(js|css)$', // embed all javascript and css inline
          title: '前端开发丨张大漾',
        })
      ),
      new HtmlWebpackInlineSourcePlugin(),
    ]
  }
}
