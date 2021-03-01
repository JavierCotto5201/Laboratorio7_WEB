const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:
    {
        inicio:"./src/index1.js",
        badbunny:"./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      },

      plugins: [new HtmlWebpackPlugin(),new MiniCssExtractPlugin({
          template:"./src/badbunny/badbunny.html",
          filename:"badbunny.html",
          chunks:["index"]
      })],

      module: {
        rules: [    
            {test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader']},

            {test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

            {test: /\.(png|jpe?g|gif|mp4|jpg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name:'[path] [name].[ext]',
                    }
                  },
                ],
              },   
        ],
      },    
  };