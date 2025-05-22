const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
    mainFiles: ['index'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/template.html',
    }),
    new ESLintPlugin({ configType: 'eslintrc' }),
    new StylelintPlugin({}),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              // The number of loaders applied before CSS loader
              importLoaders: 2,
            },
          },
          // Processes CSS with PostCSS
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
